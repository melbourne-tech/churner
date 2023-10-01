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
  ),
  (
    '2c974f08-1f71-4116-a4e1-f078af4b7d3a',
    '2023-09-10 15:55:38.232672+00',
    '2023-09-10 15:55:38.232672+00',
    'citi',
    'Citi',
    'https://www1.citibank.com.au/'
  ),
  (
    '637197c0-a19d-48f5-a6d2-f1b200e4c6cd',
    '2023-09-17 06:09:40.753595+00',
    '2023-09-17 06:09:40.753595+00',
    'boq',
    'Bank of Queensland',
    'https://www.boq.com.au/'
  ),
  (
    '2088a282-6646-47d7-97bb-0e30417cb0d6',
    '2023-09-17 07:01:02.866104+00',
    '2023-09-17 07:01:02.866104+00',
    'commbank',
    'Commonwealth Bank',
    'https://www.commbank.com.au/'
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
    'a21a01b3-2ead-439a-828c-f2d10351aa8c',
    '2023-09-17 05:53:41.193656+00',
    '2023-09-17 05:53:41.193656+00',
    'd3178eda-21a6-44f9-9cf9-44bbfa9f4e09',
    'amplify-signature',
    'Amplify Rewards Signature',
    'https://churner.au/bom-amplify-signature',
    'bom-amplify-signature.png'
  ),
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
    '7e0992e2-65b7-40f5-b423-2bf427c6c35d',
    '2023-09-17 06:11:00.296931+00',
    '2023-09-17 06:11:00.296931+00',
    '637197c0-a19d-48f5-a6d2-f1b200e4c6cd',
    'platinum-rewards',
    'Platinum Rewards',
    'https://churner.au/boq-platinum-rewards',
    'boq-platinum-rewards.jpg'
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
  ),
  (
    '1511c291-a1a5-4b5e-9dfe-afc1b6b96194',
    '2023-09-10 15:56:39.814679+00',
    '2023-09-10 15:56:39.814679+00',
    '2c974f08-1f71-4116-a4e1-f078af4b7d3a',
    'prestige',
    'Prestige',
    'https://churner.au/citi-prestige',
    'citi-prestige.avif'
  ),
  (
    'c9d7ad3e-a7d4-4f0d-9a5f-70f927b3799f',
    '2023-09-11 06:03:47.31468+00',
    '2023-09-11 06:03:47.31468+00',
    '00bff119-ccec-41b0-9cf3-49a122d04152',
    'rewards-black',
    'Rewards Black',
    'https://churner.au/anz-rewards-black',
    'anz-rewards-black.jpeg'
  ),
  (
    'fbcb9ed3-3569-46b9-b62e-0319f25ce7b6',
    '2023-09-11 06:04:19.305219+00',
    '2023-09-11 06:04:19.305219+00',
    '00bff119-ccec-41b0-9cf3-49a122d04152',
    'rewards-platinum',
    'Rewards Platinum',
    'https://churner.au/anz-rewards-platinum',
    'anz-rewards-platinum.jpeg'
  ),
  (
    'de59355e-a57d-40e7-841a-f7c610c56f51',
    '2023-09-11 06:28:23.895123+00',
    '2023-09-11 06:28:23.895123+00',
    '51a2dfe6-0a69-48fb-a476-c801e001ac64',
    'explorer',
    'Explorer',
    'https://churner.au/amex-explorer',
    'amex-explorer.avif'
  ),
  (
    '5b332a5b-aafc-47b0-9a7d-a0c43c886fca',
    '2023-09-11 06:29:25.73622+00',
    '2023-09-11 06:29:25.73622+00',
    '51a2dfe6-0a69-48fb-a476-c801e001ac64',
    'velocity-platinum',
    'Velocity Platinum',
    'https://churner.au/amex-velocity-platinum',
    'amex-velocity-platinum.webp'
  ),
  (
    '766be001-b486-4e0e-93ce-aff315b61380',
    '2023-09-11 06:30:15.4023+00',
    '2023-09-11 06:30:15.4023+00',
    '51a2dfe6-0a69-48fb-a476-c801e001ac64',
    'qantas-ultimate',
    'Qantas Ultimate',
    'https://churner.au/amex-qantas-ultimate',
    'amex-qantas-ultimate.webp'
  ),
  (
    '6269ef7c-d9aa-4c8b-b2ca-f67458931d1d',
    '2023-09-11 06:32:56.816446+00',
    '2023-09-11 06:32:56.816446+00',
    '51a2dfe6-0a69-48fb-a476-c801e001ac64',
    'qantas-premium',
    'Qantas Premium',
    'https://churner.au/amex-qantas-premium',
    'amex-qantas-premium.avif'
  ),
  (
    'bb9908ee-af15-419d-985d-b382a5ed41a4',
    '2023-09-11 06:47:10.913403+00',
    '2023-09-11 06:47:10.913403+00',
    '2c974f08-1f71-4116-a4e1-f078af4b7d3a',
    'prestige-qantas',
    'Prestige Qantas',
    'https://churner.au/citi-prestige-qantas',
    'citi-prestige.avif'
  ),
  (
    'e71a2030-ce28-48f3-8525-2a8b586799dc',
    '2023-09-17 06:22:43.645323+00',
    '2023-09-17 06:30:38.885611+00',
    '2c974f08-1f71-4116-a4e1-f078af4b7d3a',
    'premier',
    'Premier',
    'https://churner.au/citi-premier',
    'citi-premier.avif'
  ),
  (
    'e5a0d8a0-89ce-499d-9a15-6a18d7599582',
    '2023-08-22 13:48:29.255727+00',
    '2023-09-17 05:47:37.573238+00',
    'd3178eda-21a6-44f9-9cf9-44bbfa9f4e09',
    'amplify-qantas-signature',
    'Amplify Qantas Signature',
    'https://churner.au/bom-ff-signature',
    'bom-amplify-signature.png'
  ),
  (
    '2aa3295a-8dd8-4891-88e8-1bf9ea10306b',
    '2023-09-17 05:48:26.987236+00',
    '2023-09-17 05:48:26.987236+00',
    'd3178eda-21a6-44f9-9cf9-44bbfa9f4e09',
    'amplify-qantas-platinum',
    'Amplify Qantas Platinum',
    'https://churner.au/bom-ff-platinum',
    'bom-amplify-platinum.png'
  ),
  (
    '79693c7c-88f9-4ea3-895a-f542fe3745be',
    '2023-09-17 06:23:39.824142+00',
    '2023-09-17 06:30:47.915479+00',
    '2c974f08-1f71-4116-a4e1-f078af4b7d3a',
    'rewards',
    'Rewards',
    'https://churner.au/citi-rewards',
    'citi-rewards.avif'
  ),
  (
    'a33e56fd-3aa6-450b-a3d8-d3b5508c95af',
    '2023-09-17 06:30:14.884173+00',
    '2023-09-17 06:30:59.683079+00',
    '2c974f08-1f71-4116-a4e1-f078af4b7d3a',
    'premier-velocity',
    'Premier Velocity',
    'https://churner.au/citi-premier-velocity',
    'citi-premier.avif'
  ),
  (
    '0b0a42b5-7845-41d4-b4da-5a58f631ce6b',
    '2023-09-17 06:32:43.560862+00',
    '2023-09-17 06:32:43.560862+00',
    '2c974f08-1f71-4116-a4e1-f078af4b7d3a',
    'rewards-velocity',
    'Rewards Velocity',
    'https://churner.au/citi-rewards-velocity',
    'citi-rewards.avif'
  ),
  (
    '1c32dc2e-744d-4eeb-9196-8a6d3578eed3',
    '2023-09-17 06:39:04.104351+00',
    '2023-09-17 06:39:04.104351+00',
    '2c974f08-1f71-4116-a4e1-f078af4b7d3a',
    'premier-qantas',
    'Premier Qantas',
    'https://churner.au/citi-premier-qantas',
    'citi-premier.avif'
  ),
  (
    '1138b825-2bc8-407c-aeab-0d26b297838e',
    '2023-09-17 07:02:40.134629+00',
    '2023-09-17 07:02:40.134629+00',
    '2088a282-6646-47d7-97bb-0e30417cb0d6',
    'smart-awards',
    'Smart Awards',
    'https://churner.au/commbank-smart',
    'commbank-smart-awards.jpg'
  ),
  (
    '515401ad-e69a-469f-bf2e-a6c272db7a73',
    '2023-09-17 07:01:54.099476+00',
    '2023-09-17 07:03:05.173671+00',
    '2088a282-6646-47d7-97bb-0e30417cb0d6',
    'ultimate-awards',
    'Ultimate Awards',
    'https://churner.au/commbank-ultimate',
    'commbank-ultimate-awards.jpg'
  ),
  (
    '52406519-4d11-4adf-9410-1ff718c7dbc2',
    '2023-09-17 07:04:11.95483+00',
    '2023-09-17 07:05:45.423347+00',
    '2088a282-6646-47d7-97bb-0e30417cb0d6',
    'awards',
    'Awards',
    'https://churner.au/commbank-awards',
    'commbank-awards.png'
  ),
  (
    'cbbccdb1-185b-4d59-b5db-29adb552d3a8',
    '2023-09-17 07:29:30.095461+00',
    '2023-09-17 07:29:30.095461+00',
    '36edd9b7-5ab5-4069-8cb2-6fce457ca8e8',
    'qantas-signature',
    'Qantas Rewards Signature',
    'https://churner.au/nab-qantas-signature',
    'nab-qantas-signature.avif'
  ),
  (
    'baee5347-05f6-4c95-bbc4-22dbaf71a175',
    '2023-09-17 07:30:18.610671+00',
    '2023-09-17 07:30:18.610671+00',
    '36edd9b7-5ab5-4069-8cb2-6fce457ca8e8',
    'qantas-premium',
    'Qantas Rewards Premium',
    'https://churner.au/nab-qantas-premium',
    'nab-qantas-premium.avif'
  ),
  (
    'e25c1117-64e9-49c7-ba6d-4cffa168107b',
    '2023-09-17 05:54:20.576181+00',
    '2023-09-17 07:46:49.443219+00',
    'd3178eda-21a6-44f9-9cf9-44bbfa9f4e09',
    'amplify-platinum',
    'Amplify Rewards Platinum',
    'https://churner.au/bom-amplify-platinum',
    'bom-amplify-platinum.png'
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
  ),
  (
    '581db394-6aff-4c05-bb06-59395372007a',
    '2023-09-10 14:37:58.599282+00',
    '2023-09-10 14:56:31.242233+00',
    '0c89d4cc-e59b-4816-9eb6-5bdc41ad1981',
    'QANTAS',
    90000,
    600000,
    120,
    22500
  ),
  (
    '89b3a244-863b-42cb-8a66-043b304b6542',
    '2023-09-10 15:58:00.890605+00',
    '2023-09-10 15:58:00.890605+00',
    '1511c291-a1a5-4b5e-9dfe-afc1b6b96194',
    'VELOCITY',
    137500,
    1000000,
    90,
    70000
  ),
  (
    'eccf2047-95c3-4b4c-8d35-7863b71714e2',
    '2023-09-11 06:07:09.936215+00',
    '2023-09-11 06:07:09.936215+00',
    'fbcb9ed3-3569-46b9-b62e-0319f25ce7b6',
    'VELOCITY',
    40000,
    200000,
    90,
    4500
  ),
  (
    'ed64fb81-c68d-4efc-bb8a-1d657dd5f007',
    '2023-09-11 06:05:52.900263+00',
    '2023-09-11 06:08:36.989315+00',
    'c9d7ad3e-a7d4-4f0d-9a5f-70f927b3799f',
    'VELOCITY',
    90000,
    300000,
    90,
    22500
  ),
  (
    '3debcb88-7176-4d61-a26e-d249a52dee38',
    '2023-09-11 06:38:52.116696+00',
    '2023-09-11 06:38:52.116696+00',
    'de59355e-a57d-40e7-841a-f7c610c56f51',
    'VELOCITY',
    25000,
    400000,
    90,
    39500
  ),
  (
    '9bd22de3-0f26-40aa-9255-47851dfaba91',
    '2023-09-11 06:39:49.3182+00',
    '2023-09-11 06:39:49.3182+00',
    '5b332a5b-aafc-47b0-9a7d-a0c43c886fca',
    'VELOCITY',
    75000,
    300000,
    90,
    37500
  ),
  (
    '15e2a4c5-e189-411b-956c-628a67247068',
    '2023-09-11 06:40:29.983888+00',
    '2023-09-11 06:40:29.983888+00',
    '766be001-b486-4e0e-93ce-aff315b61380',
    'QANTAS',
    75000,
    300000,
    90,
    45000
  ),
  (
    '518ff22d-51fa-4393-b0a4-02237cf422d3',
    '2023-09-11 06:41:32.734117+00',
    '2023-09-11 06:41:32.734117+00',
    '6269ef7c-d9aa-4c8b-b2ca-f67458931d1d',
    'QANTAS',
    30000,
    300000,
    90,
    24900
  ),
  (
    '7471a357-c067-4483-a935-28c17088aa3b',
    '2023-09-11 06:47:57.707739+00',
    '2023-09-11 06:47:57.707739+00',
    'bb9908ee-af15-419d-985d-b382a5ed41a4',
    'QANTAS',
    100000,
    750000,
    60,
    74900
  ),
  (
    '94384aa4-4be6-4f02-9b7f-d1c2258c47d5',
    '2023-09-17 05:50:49.302128+00',
    '2023-09-17 05:50:49.302128+00',
    '2aa3295a-8dd8-4891-88e8-1bf9ea10306b',
    'QANTAS',
    60000,
    300000,
    90,
    12400
  ),
  (
    '7e7499ba-d2d9-474f-95e2-a231d86b1a5c',
    '2023-09-17 05:57:11.042513+00',
    '2023-09-17 05:57:11.042513+00',
    'a21a01b3-2ead-439a-828c-f2d10351aa8c',
    'VELOCITY',
    75000,
    1200000,
    365,
    9900
  ),
  (
    '1f2d716e-011a-4861-b3bf-286445a04455',
    '2023-09-17 05:58:22.270438+00',
    '2023-09-17 05:58:22.270438+00',
    'e25c1117-64e9-49c7-ba6d-4cffa168107b',
    'VELOCITY',
    45000,
    300000,
    90,
    0
  ),
  (
    'e4e8a7aa-ddf6-4293-aa06-26be49b34dc9',
    '2023-08-22 13:48:29.255727+00',
    '2023-09-17 06:06:10.759373+00',
    'e5a0d8a0-89ce-499d-9a15-6a18d7599582',
    'QANTAS',
    90000,
    600000,
    90,
    21400
  ),
  (
    '6f9d3bae-7dcd-4559-9b9f-0b2fe3fa5570',
    '2023-09-17 06:12:17.880143+00',
    '2023-09-17 06:12:17.880143+00',
    '7e0992e2-65b7-40f5-b423-2bf427c6c35d',
    'VELOCITY',
    50000,
    300000,
    90,
    12900
  ),
  (
    'ed9f29cd-da12-4b27-83e8-70ddbd3dcb52',
    '2023-09-17 06:26:28.619378+00',
    '2023-09-17 06:26:28.619378+00',
    'e71a2030-ce28-48f3-8525-2a8b586799dc',
    'VELOCITY',
    75000,
    700000,
    90,
    15000
  ),
  (
    'ab570d22-ec8e-4e2e-a117-5ddcd17e7664',
    '2023-09-17 06:27:43.502035+00',
    '2023-09-17 06:27:43.502035+00',
    '79693c7c-88f9-4ea3-895a-f542fe3745be',
    'VELOCITY',
    30000,
    5000,
    90,
    4900
  ),
  (
    '5cd5503e-aa1d-4fbd-bbb2-47b8e43a1e1a',
    '2023-09-17 06:35:29.804916+00',
    '2023-09-17 06:35:29.804916+00',
    'a33e56fd-3aa6-450b-a3d8-d3b5508c95af',
    'VELOCITY',
    80000,
    500000,
    90,
    30000
  ),
  (
    'ca999bf6-60b5-4028-aad1-f1ed2405a8bb',
    '2023-09-17 06:37:16.268784+00',
    '2023-09-17 06:37:16.268784+00',
    '0b0a42b5-7845-41d4-b4da-5a58f631ce6b',
    'VELOCITY',
    70000,
    500000,
    90,
    14900
  ),
  (
    '2a2e10fb-b03b-4493-97a1-29bb8196bacd',
    '2023-09-17 06:40:01.714547+00',
    '2023-09-17 06:40:01.714547+00',
    '1c32dc2e-744d-4eeb-9196-8a6d3578eed3',
    'QANTAS',
    70000,
    600000,
    90,
    35000
  ),
  (
    '8a7ec22f-0ce8-4610-92a7-79f11c17a28e',
    '2023-09-17 07:09:35.041974+00',
    '2023-09-17 07:09:35.041974+00',
    '515401ad-e69a-469f-bf2e-a6c272db7a73',
    'VELOCITY',
    50000,
    600000,
    90,
    42000
  ),
  (
    '46884966-924a-4ca9-af61-4a7b353afe31',
    '2023-09-17 07:08:30.32157+00',
    '2023-09-17 07:09:46.682495+00',
    '515401ad-e69a-469f-bf2e-a6c272db7a73',
    'QANTAS',
    70000,
    600000,
    90,
    42000
  ),
  (
    '455ae211-a04e-4651-bec5-85860451f4ce',
    '2023-09-17 07:11:07.706099+00',
    '2023-09-17 07:11:07.706099+00',
    '1138b825-2bc8-407c-aeab-0d26b297838e',
    'QANTAS',
    50000,
    400000,
    90,
    22800
  ),
  (
    '8c58f5ad-4c67-40da-8410-726e15cd0094',
    '2023-09-17 07:12:07.321603+00',
    '2023-09-17 07:12:07.321603+00',
    '1138b825-2bc8-407c-aeab-0d26b297838e',
    'VELOCITY',
    40000,
    400000,
    90,
    22800
  ),
  (
    '4fecbcd3-c21b-46fb-b751-037a446f1ade',
    '2023-09-17 07:13:03.79666+00',
    '2023-09-17 07:13:03.79666+00',
    '52406519-4d11-4adf-9410-1ff718c7dbc2',
    'VELOCITY',
    25000,
    250000,
    90,
    9600
  ),
  (
    '9ae856e1-f0d2-4897-be27-3d26df787940',
    '2023-09-17 07:32:05.451752+00',
    '2023-09-17 07:32:05.451752+00',
    'cbbccdb1-185b-4d59-b5db-29adb552d3a8',
    'QANTAS',
    90000,
    300000,
    60,
    29500
  ),
  (
    'e805251c-ef10-4bdc-aa25-8e896cb9ed8d',
    '2023-09-17 07:32:59.005569+00',
    '2023-09-17 07:32:59.005569+00',
    'baee5347-05f6-4c95-bbc4-22dbaf71a175',
    'QANTAS',
    70000,
    200000,
    60,
    15000
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

insert into
  "storage"."objects" (
    "id",
    "bucket_id",
    "name",
    "owner",
    "created_at",
    "updated_at",
    "last_accessed_at",
    "metadata",
    "version"
  )
values
  (
    'c1bceef1-66de-49f9-906d-5a6ce8ee7bf9',
    'card-images',
    'anz-frequent-flyer-black.jpeg',
    null,
    '2023-09-10 09:10:22.563425+00',
    '2023-09-10 09:10:22.695324+00',
    '2023-09-10 09:10:22.563425+00',
    '{"eTag": "\"c6e4c1101ebc8f40c0d31085c5841294\"", "size": 60587, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-09-10T09:10:23.000Z", "contentLength": 60587, "httpStatusCode": 200}',
    null
  ),
  (
    '7fd6a6be-9630-4ee9-91c7-8e4ee915b9a8',
    'card-images',
    'amex-platinum.webp',
    null,
    '2023-09-10 09:20:20.342205+00',
    '2023-09-10 09:20:20.469284+00',
    '2023-09-10 09:20:20.342205+00',
    '{"eTag": "\"444d7ad05be3a45fe879ae1a36a819fe\"", "size": 40710, "mimetype": "image/webp", "cacheControl": "max-age=3600", "lastModified": "2023-09-10T09:20:21.000Z", "contentLength": 40710, "httpStatusCode": 200}',
    null
  ),
  (
    '4913677b-5b35-449e-829e-c9d5ad667eb1',
    'card-images',
    'anz-frequent-flyer-platinum.jpeg',
    null,
    '2023-09-10 13:36:50.990725+00',
    '2023-09-10 13:36:51.163984+00',
    '2023-09-10 13:36:50.990725+00',
    '{"eTag": "\"50310cba749a1fa445464231a6bdd4ab\"", "size": 62256, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-09-10T13:36:52.000Z", "contentLength": 62256, "httpStatusCode": 200}',
    null
  ),
  (
    '544517f0-c9bf-47e1-a8db-99f4ad975de8',
    'card-images',
    'nab-rewards-signature.avif',
    null,
    '2023-09-10 13:36:55.417423+00',
    '2023-09-10 13:36:55.552547+00',
    '2023-09-10 13:36:55.417423+00',
    '{"eTag": "\"d12d6dffba338027acdcff83c03b4463\"", "size": 10809, "mimetype": "image/avif", "cacheControl": "max-age=3600", "lastModified": "2023-09-10T13:36:56.000Z", "contentLength": 10809, "httpStatusCode": 200}',
    null
  ),
  (
    'a8299723-f4b3-4406-ad7a-77a2b97c3748',
    'card-images',
    'nab-rewards-platinum.avif',
    null,
    '2023-09-10 13:36:55.704314+00',
    '2023-09-10 13:36:55.780236+00',
    '2023-09-10 13:36:55.704314+00',
    '{"eTag": "\"9f5c8a0e3b935d66dfda27d9934c085e\"", "size": 9988, "mimetype": "image/avif", "cacheControl": "max-age=3600", "lastModified": "2023-09-10T13:36:56.000Z", "contentLength": 9988, "httpStatusCode": 200}',
    null
  ),
  (
    'ef3dd878-ee23-400c-9010-771a536664c2',
    'card-images',
    'virgin-money-flyer.jpeg',
    null,
    '2023-09-10 13:52:34.159892+00',
    '2023-09-10 13:52:34.305134+00',
    '2023-09-10 13:52:34.159892+00',
    '{"eTag": "\"69b987ec68f63eeb6b60adb11a3288fd\"", "size": 56045, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-09-10T13:52:35.000Z", "contentLength": 56045, "httpStatusCode": 200}',
    null
  ),
  (
    '8b301dc3-fc47-4e63-b433-a47cdb29ebca',
    'card-images',
    'virgin-money-high-flyer.jpeg',
    null,
    '2023-09-10 13:52:34.283766+00',
    '2023-09-10 13:52:34.417676+00',
    '2023-09-10 13:52:34.283766+00',
    '{"eTag": "\"05fb643475eadda472ee1d30103388a9\"", "size": 58575, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-09-10T13:52:35.000Z", "contentLength": 58575, "httpStatusCode": 200}',
    null
  ),
  (
    'c6634d76-7548-42be-9989-1b7a46196667',
    'card-images',
    'westpac-qantas-platinum.png',
    null,
    '2023-09-10 14:25:25.809173+00',
    '2023-09-10 14:25:25.976048+00',
    '2023-09-10 14:25:25.809173+00',
    '{"eTag": "\"fe6474ff975fc21337800b03ccbbb2c9\"", "size": 107189, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2023-09-10T14:25:26.000Z", "contentLength": 107189, "httpStatusCode": 200}',
    null
  ),
  (
    'd7cc9cc2-54c8-414b-8d93-e4cfba73218b',
    'card-images',
    'westpac-velocity-platinum.jpg',
    null,
    '2023-09-10 14:25:26.015055+00',
    '2023-09-10 14:25:26.193957+00',
    '2023-09-10 14:25:26.015055+00',
    '{"eTag": "\"6a71609c1587a8c29a5069a47c753983\"", "size": 118511, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-09-10T14:25:27.000Z", "contentLength": 118511, "httpStatusCode": 200}',
    null
  ),
  (
    '83c782c4-deda-4241-8741-2c6da3ef40ed',
    'card-images',
    'westpac-velocity-black.png',
    null,
    '2023-09-10 14:25:26.137167+00',
    '2023-09-10 14:25:26.262859+00',
    '2023-09-10 14:25:26.137167+00',
    '{"eTag": "\"f2f7e1468a9fe81e1764e596af7e7ac5\"", "size": 101585, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2023-09-10T14:25:27.000Z", "contentLength": 101585, "httpStatusCode": 200}',
    null
  ),
  (
    'f268a5c2-3005-46ca-97dd-b12d3bfbed9c',
    'card-images',
    'westpac-qantas-black.png',
    null,
    '2023-09-10 14:25:26.200273+00',
    '2023-09-10 14:25:26.278636+00',
    '2023-09-10 14:25:26.200273+00',
    '{"eTag": "\"e519465fd6189a3f6efe61b205666d4e\"", "size": 99529, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2023-09-10T14:25:27.000Z", "contentLength": 99529, "httpStatusCode": 200}',
    null
  ),
  (
    'de09e4cb-1908-44d5-a396-02a6ac80f4e8',
    'card-images',
    'coles-rewards.webp',
    null,
    '2023-09-10 14:40:30.636788+00',
    '2023-09-10 14:40:30.747876+00',
    '2023-09-10 14:40:30.636788+00',
    '{"eTag": "\"ec5cd10c2c270db1ba6c3d7b499c9ab5\"", "size": 7364, "mimetype": "image/webp", "cacheControl": "max-age=3600", "lastModified": "2023-09-10T14:40:31.000Z", "contentLength": 7364, "httpStatusCode": 200}',
    null
  ),
  (
    '34b343ca-4d1d-4c04-92f4-31750e28d8ef',
    'card-images',
    'citi-prestige.avif',
    null,
    '2023-09-10 15:55:05.493842+00',
    '2023-09-10 15:55:05.637454+00',
    '2023-09-10 15:55:05.493842+00',
    '{"eTag": "\"bccec388db8b0e2d6ed6c83bf9e36bde\"", "size": 32976, "mimetype": "image/avif", "cacheControl": "max-age=3600", "lastModified": "2023-09-10T15:55:06.000Z", "contentLength": 32976, "httpStatusCode": 200}',
    null
  ),
  (
    '2861fa17-2427-4973-95ea-050b47d7439b',
    'card-images',
    'anz-rewards-platinum.jpeg',
    null,
    '2023-09-11 05:58:18.10119+00',
    '2023-09-11 05:58:18.273577+00',
    '2023-09-11 05:58:18.10119+00',
    '{"eTag": "\"419254319425c7a1a4d358c2463dbb3e\"", "size": 74005, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-09-11T05:58:19.000Z", "contentLength": 74005, "httpStatusCode": 200}',
    null
  ),
  (
    'aed443b6-6f0d-4683-ac15-eb7cb83b01e9',
    'card-images',
    'anz-rewards-black.jpeg',
    null,
    '2023-09-11 05:58:18.14337+00',
    '2023-09-11 05:58:18.398019+00',
    '2023-09-11 05:58:18.14337+00',
    '{"eTag": "\"78cff5c03876118e63349070d0d11edf\"", "size": 68449, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-09-11T05:58:19.000Z", "contentLength": 68449, "httpStatusCode": 200}',
    null
  ),
  (
    '48190180-5725-431d-a727-4cb9ef886a23',
    'card-images',
    'amex-velocity-platinum.webp',
    null,
    '2023-09-11 06:21:35.604952+00',
    '2023-09-11 06:21:35.750053+00',
    '2023-09-11 06:21:35.604952+00',
    '{"eTag": "\"0ee3c27da2c52a992d868e675e45f205\"", "size": 6672, "mimetype": "image/webp", "cacheControl": "max-age=3600", "lastModified": "2023-09-11T06:21:36.000Z", "contentLength": 6672, "httpStatusCode": 200}',
    null
  ),
  (
    '9b6be640-f95e-4cf3-b3e4-af265239bfb0',
    'card-images',
    'amex-explorer.avif',
    null,
    '2023-09-11 06:21:35.708729+00',
    '2023-09-11 06:21:35.793719+00',
    '2023-09-11 06:21:35.708729+00',
    '{"eTag": "\"97e5545f683d32fd87b3d74d31619681\"", "size": 8857, "mimetype": "image/avif", "cacheControl": "max-age=3600", "lastModified": "2023-09-11T06:21:36.000Z", "contentLength": 8857, "httpStatusCode": 200}',
    null
  ),
  (
    '2e39cb0b-ad0d-41cc-b13b-7b25330e6199',
    'card-images',
    'amex-qantas-premium.avif',
    null,
    '2023-09-11 06:21:35.78006+00',
    '2023-09-11 06:21:35.91265+00',
    '2023-09-11 06:21:35.78006+00',
    '{"eTag": "\"95d2838064eedc00fa666c0a734464c8\"", "size": 13697, "mimetype": "image/avif", "cacheControl": "max-age=3600", "lastModified": "2023-09-11T06:21:36.000Z", "contentLength": 13697, "httpStatusCode": 200}',
    null
  ),
  (
    '91a15063-3f20-4c53-97b2-6d69cc442bd3',
    'card-images',
    'amex-qantas-ultimate.webp',
    null,
    '2023-09-11 06:21:36.040999+00',
    '2023-09-11 06:21:36.151959+00',
    '2023-09-11 06:21:36.040999+00',
    '{"eTag": "\"fbe9934542dfea8be0a0f3ec83cc7cb1\"", "size": 21874, "mimetype": "image/webp", "cacheControl": "max-age=3600", "lastModified": "2023-09-11T06:21:37.000Z", "contentLength": 21874, "httpStatusCode": 200}',
    null
  ),
  (
    '77c60af3-cde9-47ce-9276-ca9924ae5f59',
    'card-images',
    'bom-amplify-signature.png',
    null,
    '2023-09-16 07:56:36.313192+00',
    '2023-09-16 07:56:36.441135+00',
    '2023-09-16 07:56:36.313192+00',
    '{"eTag": "\"4491cc81cc9ae14dd27043ccdcd92723\"", "size": 25062, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2023-09-16T07:56:37.000Z", "contentLength": 25062, "httpStatusCode": 200}',
    null
  ),
  (
    'a4cd9bc0-8e25-4d4e-8d19-9691ef4acfe5',
    'card-images',
    'bom-amplify-platinum.png',
    null,
    '2023-09-16 07:56:36.577046+00',
    '2023-09-16 07:56:36.654036+00',
    '2023-09-16 07:56:36.577046+00',
    '{"eTag": "\"a47de029d5f871372989dfdfa58fd86d\"", "size": 26849, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2023-09-16T07:56:37.000Z", "contentLength": 26849, "httpStatusCode": 200}',
    null
  ),
  (
    '783ce419-577f-48eb-8e83-b4c989b2da55',
    'card-images',
    'boq-platinum-rewards.jpg',
    null,
    '2023-09-17 06:10:36.808225+00',
    '2023-09-17 06:10:36.938856+00',
    '2023-09-17 06:10:36.808225+00',
    '{"eTag": "\"e0a282096dfbf9a8f7d30773798229b5\"", "size": 26340, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-09-17T06:10:37.000Z", "contentLength": 26340, "httpStatusCode": 200}',
    null
  ),
  (
    'bcc9a19c-f67d-4d32-8664-22074ddc8a23',
    'card-images',
    'citi-rewards.avif',
    null,
    '2023-09-17 06:22:04.219903+00',
    '2023-09-17 06:22:04.544378+00',
    '2023-09-17 06:22:04.219903+00',
    '{"eTag": "\"dcbf0478952e5a4c51a2d052258fc174\"", "size": 30693, "mimetype": "image/avif", "cacheControl": "max-age=3600", "lastModified": "2023-09-17T06:22:05.000Z", "contentLength": 30693, "httpStatusCode": 200}',
    null
  ),
  (
    'a69cfd3b-1ae1-438a-a7e0-e86fec84980c',
    'card-images',
    'citi-premier.avif',
    null,
    '2023-09-17 06:22:04.468445+00',
    '2023-09-17 06:22:04.602286+00',
    '2023-09-17 06:22:04.468445+00',
    '{"eTag": "\"44831344010fa5ce0734e0df638273c0\"", "size": 31400, "mimetype": "image/avif", "cacheControl": "max-age=3600", "lastModified": "2023-09-17T06:22:05.000Z", "contentLength": 31400, "httpStatusCode": 200}',
    null
  ),
  (
    '336dea49-025f-44c7-83b2-ae8e35453954',
    'card-images',
    'commbank-ultimate-awards.jpg',
    null,
    '2023-09-17 06:57:40.002365+00',
    '2023-09-17 06:57:40.161508+00',
    '2023-09-17 06:57:40.002365+00',
    '{"eTag": "\"a2acc1e18db16968371be8e723509416\"", "size": 31386, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-09-17T06:57:41.000Z", "contentLength": 31386, "httpStatusCode": 200}',
    null
  ),
  (
    'ee66689a-e7d1-4b77-b02a-48e81e23b20f',
    'card-images',
    'commbank-smart-awards.jpg',
    null,
    '2023-09-17 06:57:40.210598+00',
    '2023-09-17 06:57:40.31805+00',
    '2023-09-17 06:57:40.210598+00',
    '{"eTag": "\"0f6499dff4edf31f9fcca682f02e36eb\"", "size": 33258, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-09-17T06:57:41.000Z", "contentLength": 33258, "httpStatusCode": 200}',
    null
  ),
  (
    '230e58c5-c470-444a-8e2e-15eb3c57cd1f',
    'card-images',
    'commbank-awards.png',
    null,
    '2023-09-17 06:57:40.155368+00',
    '2023-09-17 06:57:40.478557+00',
    '2023-09-17 06:57:40.155368+00',
    '{"eTag": "\"0a7d22b58ce41295b188c40df4f2ff10\"", "size": 120409, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2023-09-17T06:57:41.000Z", "contentLength": 120409, "httpStatusCode": 200}',
    null
  ),
  (
    'b361c296-2b58-4c4f-a8a4-be3dd8e48c41',
    'card-images',
    'nab-qantas-signature.avif',
    null,
    '2023-09-17 07:26:55.398351+00',
    '2023-09-17 07:26:55.533662+00',
    '2023-09-17 07:26:55.398351+00',
    '{"eTag": "\"389662c5aca68e2203e62e7b58347210\"", "size": 20614, "mimetype": "image/avif", "cacheControl": "max-age=3600", "lastModified": "2023-09-17T07:26:56.000Z", "contentLength": 20614, "httpStatusCode": 200}',
    null
  ),
  (
    '63531d7b-5306-422c-b6a5-bc5ec36fde17',
    'card-images',
    'nab-qantas-premium.avif',
    null,
    '2023-09-17 07:26:55.576054+00',
    '2023-09-17 07:26:55.677936+00',
    '2023-09-17 07:26:55.576054+00',
    '{"eTag": "\"5b69740bc4f795948823e772875239d8\"", "size": 18466, "mimetype": "image/avif", "cacheControl": "max-age=3600", "lastModified": "2023-09-17T07:26:56.000Z", "contentLength": 18466, "httpStatusCode": 200}',
    null
  );