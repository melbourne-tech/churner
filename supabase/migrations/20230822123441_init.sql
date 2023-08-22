-- setup
create extension if not exists moddatetime schema extensions;

create extension if not exists citext schema extensions;

comment on schema public is e'@graphql({"inflect_names": true})';

-- issuers table
create table
  public.issuers (
    "id" uuid primary key not null default gen_random_uuid (),
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "slug" extensions.citext not null unique,
    "name" text not null,
    "url" text
  );

create trigger issuers_updated_at before
update on public.issuers for each row
execute procedure moddatetime (updated_at);

alter table public.issuers enable row level security;

-- cards table
create table
  public.cards (
    "id" uuid primary key not null default gen_random_uuid (),
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "issuer_id" uuid not null references public.issuers ("id") on delete cascade on update cascade,
    "slug" extensions.citext not null,
    "name" text not null,
    "url" text,
    "image_path" text,
    "yearly_fee_cents" bigint not null default 0,
    "points_per_dollar" numeric(5, 2) not null default 0,
    unique ("issuer_id", "slug")
  );

create trigger cards_updated_at before
update on public.cards for each row
execute procedure moddatetime (updated_at);

alter table public.cards enable row level security;

-- points table
create type public.rewards_program as enum('QANTAS', 'VELOCITY');

create table
  public.bonus_points (
    "id" uuid primary key not null default gen_random_uuid (),
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "card_id" uuid not null references public.cards ("id") on delete cascade on update cascade,
    "rewards_program" public.rewards_program not null,
    "amount" integer not null default 0,
    "minimum_spend_cents" bigint not null default 0,
    "time_frame_days" integer not null default 0,
    "minimum_spend_per_day_cents" double precision generated always as (
      case
        when time_frame_days > 0 then minimum_spend_cents / time_frame_days
        else 0
      end
    ) stored
  );

create index on public.bonus_points ("card_id");

create trigger bonus_points_updated_at before
update on public.bonus_points for each row
execute procedure moddatetime (updated_at);

alter table public.bonus_points enable row level security;