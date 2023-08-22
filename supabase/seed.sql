insert into
  "public"."issuers" (
    "id",
    "created_at",
    "updated_at",
    "slug",
    "name",
    "url"
  )
values
  (
    'd3178eda-21a6-44f9-9cf9-44bbfa9f4e09',
    '2023-08-22 13:48:29.255727+00',
    '2023-08-22 13:48:29.255727+00',
    'bank-of-melbourne',
    'Bank of Melbourne',
    'https://www.bankofmelbourne.com.au/'
  );

insert into
  "public"."cards" (
    "id",
    "created_at",
    "updated_at",
    "issuer_id",
    "slug",
    "name",
    "url",
    "image_path",
    "yearly_fee_cents",
    "points_per_dollar"
  )
values
  (
    'e5a0d8a0-89ce-499d-9a15-6a18d7599582',
    '2023-08-22 13:48:29.255727+00',
    '2023-08-22 13:48:29.255727+00',
    'd3178eda-21a6-44f9-9cf9-44bbfa9f4e09',
    'amplify-signature',
    'Amplify Qantas Signature',
    'https://www.bankofmelbourne.com.au/personal/credit-cards/frequent-flyer/amplify-signature',
    null,
    37000,
    0.75
  );

insert into
  "public"."bonus_points" (
    "id",
    "created_at",
    "updated_at",
    "card_id",
    "rewards_program",
    "amount",
    "minimum_spend_cents",
    "time_frame_days"
  )
values
  (
    'e4e8a7aa-ddf6-4293-aa06-26be49b34dc9',
    '2023-08-22 13:48:29.255727+00',
    '2023-08-22 13:48:29.255727+00',
    'e5a0d8a0-89ce-499d-9a15-6a18d7599582',
    'QANTAS',
    90000,
    600000,
    90
  );