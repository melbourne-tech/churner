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
	),
	(
		'7f1b213b-bbe7-4a7f-90f0-140ed2f914e4',
		'2023-09-10 13:53:45.022558+00',
		'2023-09-10 13:53:45.022558+00',
		'virgin-money',
		'Virgin Money',
		'https://virginmoney.com.au/'
	),
	(
		'ec7d137a-93e2-498c-9388-230a219d11fe',
		'2023-09-10 14:12:14.707044+00',
		'2023-09-10 14:12:14.707044+00',
		'westpac',
		'Westpac',
		'https://www.westpac.com.au/'
	),
	(
		'6c3f0031-69f3-4714-aab3-276683419863',
		'2023-09-10 14:40:05.437375+00',
		'2023-09-10 14:40:05.437375+00',
		'coles',
		'Coles',
		'https://www.coles.com.au/credit-cards'
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
		"image_path"
	)
values
	(
		'61a0dc3c-8a68-47ba-aefa-1a3c9c500ce8',
		'2023-08-27 06:15:58.545964+00',
		'2023-09-10 13:38:13.143138+00',
		'51a2dfe6-0a69-48fb-a476-c801e001ac64',
		'platinum',
		'Platinum Card',
		'https://churner.au/amex-platinum',
		'amex-platinum.webp'
	),
	(
		'a21a4ac5-7112-4ee8-9f3c-30608c072cb0',
		'2023-08-27 04:41:55.177342+00',
		'2023-09-10 13:40:52.595652+00',
		'00bff119-ccec-41b0-9cf3-49a122d04152',
		'frequent-flyer-black',
		'Frequent Flyer Black',
		'https://churner.au/anz-ff-black',
		'anz-frequent-flyer-black.jpeg'
	),
	(
		'3ac46969-c5ec-4091-9739-9f9898b919a2',
		'2023-08-27 04:45:58.375991+00',
		'2023-09-10 13:41:16.749366+00',
		'00bff119-ccec-41b0-9cf3-49a122d04152',
		'frequent-flyer-platinum',
		'Frequent Flyer Platinum',
		'https://churner.au/anz-ff-platinum',
		'anz-frequent-flyer-platinum.jpeg'
	),
	(
		'e5a0d8a0-89ce-499d-9a15-6a18d7599582',
		'2023-08-22 13:48:29.255727+00',
		'2023-09-10 13:42:44.791553+00',
		'd3178eda-21a6-44f9-9cf9-44bbfa9f4e09',
		'amplify-signature',
		'Amplify Qantas Signature',
		'https://churner.au/bom-ff-signature',
		'bom-amplify-qantas-signature.avif'
	),
	(
		'eeea8933-9443-4e47-bb43-4b2a9a76d718',
		'2023-08-27 06:27:33.721287+00',
		'2023-09-10 13:43:23.188378+00',
		'36edd9b7-5ab5-4069-8cb2-6fce457ca8e8',
		'rewards-platinum',
		'Rewards Platinum Card with Velocity',
		'https://churner.au/nab-velocity-platinum',
		'nab-rewards-platinum.avif'
	),
	(
		'c40a5c57-2f96-46d9-9f92-6408ed2d0e50',
		'2023-08-27 06:23:07.207707+00',
		'2023-09-10 13:43:54.831433+00',
		'36edd9b7-5ab5-4069-8cb2-6fce457ca8e8',
		'rewards-signature',
		'Rewards Signature Card with Velocity',
		'https://churner.au/nab-velocity-signature',
		'nab-rewards-signature.avif'
	),
	(
		'd1dd1c1d-c7df-453a-b389-ea71c724691c',
		'2023-09-10 13:55:30.754696+00',
		'2023-09-10 13:55:30.754696+00',
		'7f1b213b-bbe7-4a7f-90f0-140ed2f914e4',
		'flyer',
		'Velocity Flyer',
		'https://churner.au/virgin-flyer',
		'virgin-money-flyer.jpeg'
	),
	(
		'daea4538-4d31-4008-a65d-edb33cb05073',
		'2023-09-10 13:59:58.195438+00',
		'2023-09-10 13:59:58.195438+00',
		'7f1b213b-bbe7-4a7f-90f0-140ed2f914e4',
		'high-flyer',
		'Velocity High Flyer',
		'https://churner.au/virgin-high-flyer',
		'virgin-money-high-flyer.jpeg'
	),
	(
		'e660a2c3-08e8-4ded-9426-c885886edbc1',
		'2023-09-10 14:29:32.007945+00',
		'2023-09-10 14:29:32.007945+00',
		'ec7d137a-93e2-498c-9388-230a219d11fe',
		'velocity-platinum',
		'Altitude Velocity Platinum',
		'https://churner.au/westpac-velocity-platinum',
		'westpac-velocity-platinum.jpg'
	),
	(
		'3f9e6857-b080-49ce-9158-55815b533f27',
		'2023-09-10 14:30:23.752365+00',
		'2023-09-10 14:30:23.752365+00',
		'ec7d137a-93e2-498c-9388-230a219d11fe',
		'velocity-black',
		'Altitude Velocity Black',
		'https://churner.au/westpac-velocity-black',
		'westpac-velocity-black.png'
	),
	(
		'f72be608-49fd-4e79-90d4-ab28e947eb63',
		'2023-09-10 14:31:16.81851+00',
		'2023-09-10 14:31:16.81851+00',
		'ec7d137a-93e2-498c-9388-230a219d11fe',
		'qantas-platinum',
		'Altitude Qantas Platinum',
		'https://churner.au/westpac-qantas-platinum',
		'westpac-qantas-platinum.png'
	),
	(
		'0c89d4cc-e59b-4816-9eb6-5bdc41ad1981',
		'2023-09-10 14:31:55.779384+00',
		'2023-09-10 14:31:55.779384+00',
		'ec7d137a-93e2-498c-9388-230a219d11fe',
		'qantas-black',
		'Altitude Qantas Black',
		'https://churner.au/westpac-qantas-black',
		'westpac-qantas-black.png'
	),
	(
		'8426f405-9052-4caa-a874-f424028294ef',
		'2023-09-10 14:41:33.962561+00',
		'2023-09-10 14:41:33.962561+00',
		'6c3f0031-69f3-4714-aab3-276683419863',
		'rewards',
		'Rewards',
		'https://churner.au/coles-rewards',
		'coles-rewards.webp'
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
		"time_frame_days",
		"yearly_fee_cents"
	)
values
	(
		'e4e8a7aa-ddf6-4293-aa06-26be49b34dc9',
		'2023-08-22 13:48:29.255727+00',
		'2023-09-10 10:36:29.018639+00',
		'e5a0d8a0-89ce-499d-9a15-6a18d7599582',
		'QANTAS',
		90000,
		600000,
		90,
		37000
	),
	(
		'83235792-8b0c-463a-8ca1-b98740857fea',
		'2023-08-27 04:43:36.552707+00',
		'2023-09-10 10:36:29.018639+00',
		'a21a4ac5-7112-4ee8-9f3c-30608c072cb0',
		'QANTAS',
		110000,
		500000,
		90,
		32500
	),
	(
		'0d0c3d88-ba88-4ed4-b4d9-15a9a2c90ae9',
		'2023-08-27 04:46:44.613593+00',
		'2023-09-10 10:36:29.018639+00',
		'3ac46969-c5ec-4091-9739-9f9898b919a2',
		'QANTAS',
		75000,
		250000,
		90,
		19500
	),
	(
		'4732df66-7b8d-4958-9039-f0ed35d21b7f',
		'2023-08-27 06:17:32+00',
		'2023-09-10 10:36:29.018639+00',
		'61a0dc3c-8a68-47ba-aefa-1a3c9c500ce8',
		'VELOCITY',
		75000,
		500000,
		90,
		145000
	),
	(
		'1a81cac6-1bcd-4278-91e7-5f36632f9d78',
		'2023-08-27 06:28:16.11389+00',
		'2023-09-10 10:36:29.018639+00',
		'eeea8933-9443-4e47-bb43-4b2a9a76d718',
		'VELOCITY',
		60000,
		100000,
		60,
		9500
	),
	(
		'4598a770-bbf0-44fb-b446-b1e9442b2a9a',
		'2023-08-29 14:31:50.473363+00',
		'2023-09-10 10:36:29.018639+00',
		'61a0dc3c-8a68-47ba-aefa-1a3c9c500ce8',
		'QANTAS',
		75000,
		500000,
		90,
		145000
	),
	(
		'ff8c345a-0e9c-4af8-941c-f0b57443e293',
		'2023-09-10 13:57:54.822049+00',
		'2023-09-10 13:57:54.822049+00',
		'd1dd1c1d-c7df-453a-b389-ea71c724691c',
		'VELOCITY',
		60000,
		300000,
		60,
		6400
	),
	(
		'59cfc2d0-d070-415b-b2ff-2a9317c006e1',
		'2023-09-10 14:01:15.592519+00',
		'2023-09-10 14:01:15.592519+00',
		'daea4538-4d31-4008-a65d-edb33cb05073',
		'VELOCITY',
		80000,
		700000,
		60,
		28900
	),
	(
		'4f4b433b-1087-4814-8c5b-70b65a9d8598',
		'2023-08-27 06:24:22.905376+00',
		'2023-09-10 14:03:36.310676+00',
		'c40a5c57-2f96-46d9-9f92-6408ed2d0e50',
		'VELOCITY',
		50000,
		300000,
		60,
		19500
	),
	(
		'dd077d6a-3b8b-4edb-958b-0e8254069046',
		'2023-09-10 14:33:06.508805+00',
		'2023-09-10 14:36:05.714093+00',
		'e660a2c3-08e8-4ded-9426-c885886edbc1',
		'VELOCITY',
		70000,
		400000,
		90,
		12400
	),
	(
		'85f80d61-62ab-4ac6-9b7e-41cc7d09bbb8',
		'2023-09-10 14:36:53.859827+00',
		'2023-09-10 14:36:53.859827+00',
		'f72be608-49fd-4e79-90d4-ab28e947eb63',
		'QANTAS',
		70000,
		400000,
		90,
		12400
	),
	(
		'581db394-6aff-4c05-bb06-59395372007a',
		'2023-09-10 14:37:58.599282+00',
		'2023-09-10 14:37:58.599282+00',
		'3f9e6857-b080-49ce-9158-55815b533f27',
		'QANTAS',
		90000,
		600000,
		120,
		22500
	),
	(
		'fab39353-8bc7-4398-97ec-6d217ede7461',
		'2023-09-10 14:34:33.24035+00',
		'2023-09-10 14:38:33.067306+00',
		'3f9e6857-b080-49ce-9158-55815b533f27',
		'VELOCITY',
		90000,
		600000,
		120,
		22500
	),
	(
		'62a9ed71-6fbe-438f-8e3e-5f6621811f3c',
		'2023-09-10 14:42:21.95969+00',
		'2023-09-10 14:42:21.95969+00',
		'8426f405-9052-4caa-a874-f424028294ef',
		'VELOCITY',
		25000,
		300000,
		90,
		9900
	);

insert into
	"storage"."buckets" (
		"id",
		"name",
		"owner",
		"created_at",
		"updated_at",
		"public",
		"avif_autodetection",
		"file_size_limit",
		"allowed_mime_types"
	)
values
	(
		'card-images',
		'card-images',
		null,
		'2023-09-10 09:10:03.95895+00',
		'2023-09-10 09:10:03.95895+00',
		true,
		false,
		null,
		'{image/*}'
	);