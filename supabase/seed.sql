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
	),
	(
		'00bff119-ccec-41b0-9cf3-49a122d04152',
		'2023-08-27 04:38:42.978193+00',
		'2023-08-27 04:38:42.978193+00',
		'anz',
		'ANZ',
		'https://www.anz.com.au/personal/'
	),
	(
		'51a2dfe6-0a69-48fb-a476-c801e001ac64',
		'2023-08-27 06:14:55.015346+00',
		'2023-08-27 06:14:55.015346+00',
		'american-express',
		'American Express',
		'https://www.americanexpress.com/en-au/'
	),
	(
		'36edd9b7-5ab5-4069-8cb2-6fce457ca8e8',
		'2023-08-27 06:20:49.284456+00',
		'2023-08-27 06:20:49.284456+00',
		'nab',
		'NAB',
		'https://www.nab.com.au/'
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
	),
	(
		'3ac46969-c5ec-4091-9739-9f9898b919a2',
		'2023-08-27 04:45:58.375991+00',
		'2023-08-27 04:45:58.375991+00',
		'00bff119-ccec-41b0-9cf3-49a122d04152',
		'frequent-flyer-platinum',
		'Frequent Flyer Platinum',
		'https://www.anz.com.au/personal/credit-cards/frequent-flyer/platinum/',
		null,
		19500,
		0.75
	),
	(
		'61a0dc3c-8a68-47ba-aefa-1a3c9c500ce8',
		'2023-08-27 06:15:58.545964+00',
		'2023-08-27 06:15:58.545964+00',
		'51a2dfe6-0a69-48fb-a476-c801e001ac64',
		'platinum',
		'Platinum Card',
		'https://www.americanexpress.com/au/credit-cards/the-platinum-card/',
		null,
		145000,
		1.125
	),
	(
		'a21a4ac5-7112-4ee8-9f3c-30608c072cb0',
		'2023-08-27 04:41:55.177342+00',
		'2023-08-27 06:16:59.757285+00',
		'00bff119-ccec-41b0-9cf3-49a122d04152',
		'frequent-flyer-black',
		'Frequent Flyer Black',
		'https://www.anz.com.au/personal/credit-cards/frequent-flyer/black/',
		null,
		32500,
		1.00
	),
	(
		'c40a5c57-2f96-46d9-9f92-6408ed2d0e50',
		'2023-08-27 06:23:07.207707+00',
		'2023-08-27 06:23:07.207707+00',
		'36edd9b7-5ab5-4069-8cb2-6fce457ca8e8',
		'rewards-signature',
		'Rewards Signature Card with Velocity',
		'https://www.nab.com.au/personal/credit-cards/nab-rewards-cards/velocity-points',
		null,
		19500,
		0.625
	),
	(
		'eeea8933-9443-4e47-bb43-4b2a9a76d718',
		'2023-08-27 06:27:33.721287+00',
		'2023-08-27 06:27:33.721287+00',
		'36edd9b7-5ab5-4069-8cb2-6fce457ca8e8',
		'rewards-platinum',
		'Rewards Platinum Card with Velocity',
		'https://www.nab.com.au/personal/credit-cards/nab-rewards-cards/velocity-points',
		null,
		9500,
		0.50
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
	),
	(
		'83235792-8b0c-463a-8ca1-b98740857fea',
		'2023-08-27 04:43:36.552707+00',
		'2023-08-27 04:43:36.552707+00',
		'a21a4ac5-7112-4ee8-9f3c-30608c072cb0',
		'QANTAS',
		110000,
		500000,
		90
	),
	(
		'0d0c3d88-ba88-4ed4-b4d9-15a9a2c90ae9',
		'2023-08-27 04:46:44.613593+00',
		'2023-08-27 04:46:44.613593+00',
		'3ac46969-c5ec-4091-9739-9f9898b919a2',
		'QANTAS',
		75000,
		250000,
		90
	),
	(
		'4732df66-7b8d-4958-9039-f0ed35d21b7f',
		'2023-08-27 06:17:32+00',
		'2023-08-27 06:19:10.206163+00',
		'61a0dc3c-8a68-47ba-aefa-1a3c9c500ce8',
		'VELOCITY',
		75000,
		500000,
		90
	),
	(
		'4f4b433b-1087-4814-8c5b-70b65a9d8598',
		'2023-08-27 06:24:22.905376+00',
		'2023-08-27 06:24:22.905376+00',
		'c40a5c57-2f96-46d9-9f92-6408ed2d0e50',
		'VELOCITY',
		80000,
		300000,
		60
	),
	(
		'1a81cac6-1bcd-4278-91e7-5f36632f9d78',
		'2023-08-27 06:28:16.11389+00',
		'2023-08-27 06:28:16.11389+00',
		'eeea8933-9443-4e47-bb43-4b2a9a76d718',
		'VELOCITY',
		60000,
		100000,
		60
	);