import "dotenv/config";
import { PrismaClient, Role } from "../src/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import bcrypt from "bcrypt";

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || "app",
  password: process.env.DB_PASS || "Pass",
  database: process.env.DB_NAME || "africa_art_db",
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  const password = await bcrypt.hash("password123", 12);

  // Create users matching frontend mock data
  const julian = await prisma.user.upsert({
    where: { email: "julian.doe@adunagallery.com" },
    update: {},
    create: {
      email: "julian.doe@adunagallery.com",
      password,
      name: "Julian Doe",
      role: Role.COLLECTOR,
      avatar: "JD",
      tier: "Prestige",
      emailVerified: true,
    },
  });

  const amara = await prisma.user.upsert({
    where: { email: "amara.nkosi@adunagallery.com" },
    update: {},
    create: {
      email: "amara.nkosi@adunagallery.com",
      password,
      name: "Amara Nkosi",
      role: Role.PRESTIGE,
      avatar: "AN",
      tier: "Prestige",
      emailVerified: true,
    },
  });

  const fatima = await prisma.user.upsert({
    where: { email: "dr.fatima@louvre.fr" },
    update: {},
    create: {
      email: "dr.fatima@louvre.fr",
      password,
      name: "Dr. Fatima Benali",
      role: Role.ADVISOR,
      avatar: "FB",
      institution: "Musée du Louvre",
      emailVerified: true,
    },
  });

  const admin = await prisma.user.upsert({
    where: { email: "admin@adunagallery.com" },
    update: {},
    create: {
      email: "admin@adunagallery.com",
      password,
      name: "Admin User",
      role: Role.ADMIN,
      avatar: "AU",
      institution: "Aduna Gallery",
      emailVerified: true,
    },
  });

  const visitor = await prisma.user.upsert({
    where: { email: "visitor@example.com" },
    update: {},
    create: {
      email: "visitor@example.com",
      password,
      name: "Guest Visitor",
      role: Role.VISITOR,
      avatar: "GV",
      emailVerified: true,
    },
  });

  console.log(`Users: Julian=${julian.id}, Amara=${amara.id}, Fatima=${fatima.id}, Admin=${admin.id}, Visitor=${visitor.id}`);

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({ where: { name: "Ritual Masks" }, update: {}, create: { name: "Ritual Masks", description: "Traditional ceremonial masks" } }),
    prisma.category.upsert({ where: { name: "Sculptures" }, update: {}, create: { name: "Sculptures", description: "Wood, bronze, and stone sculptures" } }),
    prisma.category.upsert({ where: { name: "Contemporary Art" }, update: {}, create: { name: "Contemporary Art", description: "Modern African art" } }),
    prisma.category.upsert({ where: { name: "Antiquities" }, update: {}, create: { name: "Antiquities", description: "Ancient artifacts" } }),
    prisma.category.upsert({ where: { name: "Textiles" }, update: {}, create: { name: "Textiles", description: "Handwoven fabrics" } }),
  ]);

  // Create artists
  const artists = await Promise.all([
    prisma.artist.create({ data: { name: "Unknown Benin Artist", nationality: "Nigerian", biography: "Master bronze caster of the Benin Empire" } }),
    prisma.artist.create({ data: { name: "Ife Master", nationality: "Nigerian", biography: "Unknown master of the Ife tradition" } }),
    prisma.artist.create({ data: { name: "Yoruba Artist", nationality: "Nigerian", biography: "Traditional Yoruba craftsman" } }),
    prisma.artist.create({ data: { name: "Akan Goldsmith", nationality: "Ghanaian", biography: "Master goldsmith of the Akan people" } }),
    prisma.artist.create({ data: { name: "Kuba Master Carver", nationality: "Congolese", biography: "Royal carver of the Kuba Kingdom" } }),
    prisma.artist.create({ data: { name: "Dogon Elder", nationality: "Malian", biography: "Senior sculptor of the Dogon people" } }),
    prisma.artist.create({ data: { name: "Luba Court Artist", nationality: "Congolese", biography: "Artist of the Luba royal court" } }),
    prisma.artist.create({ data: { name: "Nok Sculptor", nationality: "Nigerian", biography: "Ancient Nok terracotta artist" } }),
  ]);

  // Create artworks matching frontend mock data
  const artworks = await Promise.all([
    prisma.artwork.create({
      data: {
        title: "Fang Reliquary Guardian",
        description: "A stunning Fang reliquary guardian figure from Gabon, carved in dark wood with elongated features. Used in sacred Bwiti ceremonies.",
        origin: "Gabon",
        region: "Central Africa",
        tribe: "Fang",
        era: "19th Century",
        material: "Dark hardwood, kaolin",
        dimensions: "42cm x 28cm x 15cm",
        condition: "Excellent",
        price: 85000,
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC85mj-jAvMmX2GMq9niv7jdwZ6Wx737xyGzsjVQfBCbsSb5S5yBrBFAI16j-6gAFplqtdOyuGNRWg9nQakvCIvxVcTJolp0njmfw3YMjb0e-NDVgqWwxaFFahPdc1Sh8ZXxbRJAUfwwitSFa8PmwCYb5hlEDOJa07H6zyXYSPPblbdEFFsbel3YEbxZxg4p3hEK3X-jM232RsL5iGby2ZjeIITGL4oNTnYjibAIWfp66_fKEe55tne5XfeDVHtCCXr7DH21dWOjg",
        scarcityIndex: 97,
        preservationStatus: "Excellent",
        appreciationRate: "+9.2% CAGR",
        historicalStory: "This Fang reliquary guardian figure represents one of the most powerful spiritual traditions of Central Africa. Carved by an unknown master, it was used to guard bone-filled reliquary baskets.",
        investmentThesis: "Fang figures remain among the most sought-after African art forms. This piece shows exceptional patina and provenance.",
        estimatedValue: 85000,
        historicalCagr: 9.2,
        artistId: artists[0].id,
        categoryId: categories[0].id,
      },
    }),
    prisma.artwork.create({
      data: {
        title: "Ife Terracotta Head",
        description: "A magnificent Ife terracotta head, one of the earliest known naturalistic sculptures from Sub-Saharan Africa.",
        origin: "Nigeria",
        region: "West Africa",
        tribe: "Yoruba",
        era: "14th–15th Century",
        material: "Terracotta",
        dimensions: "38cm x 25cm x 22cm",
        condition: "Good (restored)",
        isPOR: true,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Ife_head_-_Museum_ridderzaal.jpg",
        scarcityIndex: 99,
        preservationStatus: "Museum Grade",
        appreciationRate: "+11.1% CAGR",
        isHero: true,
        historicalStory: "This Ife terracotta head represents the pinnacle of early West African naturalistic sculpture. Created by the Yoruba people, it embodies the sophisticated artistic tradition of the Ife kingdom.",
        investmentThesis: "Ife heads are among the rarest African art objects. With only a handful in private hands, this represents an extraordinary investment opportunity.",
        estimatedValue: 9200000,
        historicalCagr: 11.1,
        artistId: artists[1].id,
        categoryId: categories[3].id,
      },
    }),
    prisma.artwork.create({
      data: {
        title: "Benin Bronze Relief Plaque",
        description: "A magnificent Benin bronze relief plaque depicting a warrior chief in ceremonial regalia.",
        origin: "Nigeria",
        region: "West Africa",
        tribe: "Edo",
        era: "16th–17th Century",
        material: "Bronze (copper alloy)",
        dimensions: "45cm x 35cm x 3cm",
        condition: "Excellent",
        price: 1250000,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Benin_plaque%2C_16th Century%2C_Nigeria%2C_bronze%2C_HMWC.jpg",
        scarcityIndex: 98,
        preservationStatus: "Museum Grade",
        appreciationRate: "+12.4% CAGR",
        historicalStory: "This Benin bronze plaque is one of the finest examples of the lost-wax casting technique perfected by the Edo people of the Benin Kingdom.",
        investmentThesis: "Benin bronzes have consistently outperformed other African art categories. This plaque's exceptional condition and provenance make it a blue-chip investment.",
        estimatedValue: 1250000,
        historicalCagr: 12.4,
        artistId: artists[0].id,
        categoryId: categories[1].id,
      },
    }),
    prisma.artwork.create({
      data: {
        title: "Yoruba Ade Beaded Crown",
        description: "An exquisite Yoruba beaded crown (ade) traditionally worn by Yoruba kings (Obas).",
        origin: "Nigeria",
        region: "West Africa",
        tribe: "Yoruba",
        era: "19th Century",
        material: "Glass beads, cloth, basketry",
        dimensions: "35cm x 20cm x 20cm",
        condition: "Very Good",
        price: 450000,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Beaded_crown_%28ade%29_of_Onijagbo_Obasoro_Alowolodu%2C_Ogoga_of_Ikere%2C_reigned_1890-1928%2C_Yoruba%2C_Ikere%2C_Osun_state%2C_Nigeria%2C_late_19th_century%2C_basketry%2C_beads%2C_cloth_-_Brooklyn_Museum_-_Brooklyn%2C_NY_-_DSC08538.JPG",
        scarcityIndex: 95,
        preservationStatus: "Excellent",
        appreciationRate: "+10.2% CAGR",
        historicalStory: "The Yoruba ade crown is one of the most iconic symbols of African royalty. This crown features intricate beadwork with bird motifs representing the queen mothers.",
        investmentThesis: "Beaded crowns are among the most collectible African art objects. This piece's excellent condition and documented provenance make it exceptionally valuable.",
        estimatedValue: 450000,
        historicalCagr: 10.2,
        artistId: artists[2].id,
        categoryId: categories[4].id,
      },
    }),
    prisma.artwork.create({
      data: {
        title: "Nok Terracotta Seated Figure",
        description: "A rare Nok terracotta seated figure, one of the earliest known sculptural traditions in Sub-Saharan Africa.",
        origin: "Nigeria",
        region: "West Africa",
        tribe: "Nok",
        era: "500 BC – 200 AD",
        material: "Terracotta",
        dimensions: "45cm x 20cm x 18cm",
        condition: "Good (restored)",
        price: 850000,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Male_Figure_with_Raised_Arms_MET_DP302219.jpg",
        scarcityIndex: 94,
        preservationStatus: "Good",
        appreciationRate: "+9.4% CAGR",
        historicalStory: "This Nok terracotta figure represents one of the oldest sculptural traditions in Sub-Saharan Africa, dating back over 2,000 years.",
        investmentThesis: "Nok terracottas are among the most ancient African art forms. Their rarity and historical significance make them highly valuable to collectors and institutions.",
        estimatedValue: 850000,
        historicalCagr: 9.4,
        artistId: artists[7].id,
        categoryId: categories[3].id,
      },
    }),
    prisma.artwork.create({
      data: {
        title: "Akan Gold Leaf Ceremonial Weight",
        description: "An exquisite Akan gold leaf ceremonial weight used in traditional gold weight measurement.",
        origin: "Ghana",
        region: "West Africa",
        tribe: "Akan",
        era: "18th Century",
        material: "Gold",
        dimensions: "8cm x 6cm x 3cm",
        condition: "Excellent",
        price: 150000,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Brooklyn_Museum_61.33_Ndop_Portrait_of_King_Mishe_miShyaang_maMbul_%2810%29.jpg",
        scarcityIndex: 82,
        preservationStatus: "Excellent",
        appreciationRate: "+8.5% CAGR",
        historicalStory: "Akan gold weights (abrammuo) served both practical and symbolic purposes, encoding proverbs and historical narratives in miniature bronze sculptures.",
        investmentThesis: "Gold weights represent a unique intersection of art and currency. Their small size and portability make them attractive to a wide range of collectors.",
        estimatedValue: 150000,
        historicalCagr: 8.5,
        artistId: artists[3].id,
        categoryId: categories[1].id,
      },
    }),
    prisma.artwork.create({
      data: {
        title: "Kuba Ndop Royal Portrait Board",
        description: "A Kuba Ndop royal portrait board, an abstract representation of a Kuba king.",
        origin: "Democratic Republic of Congo",
        region: "Central Africa",
        tribe: "Kuba",
        era: "18th Century",
        material: "Wood, raffia",
        dimensions: "60cm x 40cm x 3cm",
        condition: "Very Good",
        price: 510000,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Brooklyn_Museum_61.33_Ndop_Portrait_of_King_Mishe_miShyaang_maMbul_%2810%29.jpg",
        scarcityIndex: 88,
        preservationStatus: "Very Good",
        appreciationRate: "+10.8% CAGR",
        historicalStory: "The Ndop is not a portrait in the Western sense but an abstract representation of a Kuba king's essence and spiritual power.",
        investmentThesis: "Kuba Ndop boards are highly collectible and represent the sophisticated artistic traditions of the Kuba Kingdom.",
        estimatedValue: 510000,
        historicalCagr: 10.8,
        artistId: artists[4].id,
        categoryId: categories[1].id,
      },
    }),
    prisma.artwork.create({
      data: {
        title: "Dogon Tellem Ancestor Figure",
        description: "A Dogon Tellem ancestor figure, carved from ironwood and used in sacred rituals.",
        origin: "Mali",
        region: "West Africa",
        tribe: "Dogon",
        era: "16th–17th Century",
        material: "Ironwood",
        dimensions: "55cm x 15cm x 12cm",
        condition: "Good",
        price: 380000,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Male_Figure_with_Raised_Arms_MET_DP302219.jpg",
        scarcityIndex: 90,
        preservationStatus: "Good",
        appreciationRate: "+9.8% CAGR",
        historicalStory: "Dogon Tellem figures represent some of the earliest sculptural traditions of the Dogon people, predating their migration to the Bandiagara Escarpment.",
        investmentThesis: "Tellem figures are increasingly rare and represent a critical link in understanding the artistic evolution of the Dogon people.",
        estimatedValue: 380000,
        historicalCagr: 9.8,
        artistId: artists[5].id,
        categoryId: categories[1].id,
      },
    }),
    prisma.artwork.create({
      data: {
        title: "Luba Royal Ceremonial Shield",
        description: "A Luba royal ceremonial shield made of wood and raffia, used by Luba warriors.",
        origin: "Democratic Republic of Congo",
        region: "Central Africa",
        tribe: "Luba",
        era: "19th Century",
        material: "Wood, raffia",
        dimensions: "70cm x 35cm x 5cm",
        condition: "Good",
        price: 275000,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Male_Figure_with_Raised_Arms_MET_DP302219.jpg",
        scarcityIndex: 85,
        preservationStatus: "Good",
        appreciationRate: "+8.9% CAGR",
        historicalStory: "The Luba shield represents the martial traditions of the Luba Empire, one of the most powerful kingdoms in Central African history.",
        investmentThesis: "Luba ceremonial objects are highly sought after by collectors of Central African art. This shield's size and condition make it exceptional.",
        estimatedValue: 275000,
        historicalCagr: 8.9,
        artistId: artists[6].id,
        categoryId: categories[1].id,
      },
    }),
    prisma.artwork.create({
      data: {
        title: "Chokwe Ciooko Divination Pendant",
        description: "A Chokwe Ciooko divination pendant, used by Chokwe diviners (tundaji).",
        origin: "Angola / Democratic Republic of Congo",
        region: "Central Africa",
        tribe: "Chokwe",
        era: "19th Century",
        material: "Wood, copper, beads",
        dimensions: "12cm x 8cm x 3cm",
        condition: "Very Good",
        price: 195000,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Male_Figure_with_Raised_Arms_MET_DP302219.jpg",
        scarcityIndex: 86,
        preservationStatus: "Very Good",
        appreciationRate: "+8.7% CAGR",
        historicalStory: "The Ciooko pendant is central to Chokwe divination practices, serving as a medium between the living and the spirit world.",
        investmentThesis: "Chokwe divination objects are among the most ritualistically significant African art forms, making them highly valuable to serious collectors.",
        estimatedValue: 195000,
        historicalCagr: 8.7,
        artistId: artists[0].id,
        categoryId: categories[1].id,
      },
    }),
  ]);

  console.log(`Artworks: ${artworks.length}`);

  // Create provenance chains
  for (const artwork of artworks) {
    await prisma.provenanceChain.createMany({
      data: [
        { artworkId: artwork.id, entry: `Created in the ${artwork.era || "19th century"}` },
        { artworkId: artwork.id, entry: "Private collection, Europe" },
        { artworkId: artwork.id, entry: "Acquired through Aduna Gallery, 2024" },
      ],
    });
  }

  // Create acquisitions for Julian
  const acq1 = await prisma.acquisition.create({
    data: {
      userId: julian.id,
      title: "Benin Bronze Head",
      era: "16th–17th Century",
      culture: "Edo / Benin Empire",
      status: "Certified",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Benin_plaque%2C_16th Century%2C_Nigeria%2C_bronze%2C_HMWC.jpg",
      estimatedValueEur: 8500000,
      description: "Exceptional Benin bronze commemorative head with coral bead headdress.",
    },
  });
  await prisma.acquisitionProvenance.createMany({
    data: [
      { acquisitionId: acq1.id, entry: "Royal Court of Benin, c. 1600" },
      { acquisitionId: acq1.id, entry: "British Punitive Expedition, 1897" },
      { acquisitionId: acq1.id, entry: "European Private Collection" },
      { acquisitionId: acq1.id, entry: "Acquired via Aduna Gallery, 2023" },
    ],
  });

  const acq2 = await prisma.acquisition.create({
    data: {
      userId: julian.id,
      title: "Ife Terracotta Head",
      era: "14th–15th Century",
      culture: "Yoruba / Ife Kingdom",
      status: "Certified",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Ife_head_-_Museum_ridderzaal.jpg",
      estimatedValueEur: 9200000,
      description: "Museum-grade Ife terracotta head, one of the finest in private hands.",
    },
  });

  console.log(`Acquisitions: 2`);

  // Create inquiries
  const inq1 = await prisma.inquiry.create({
    data: {
      userId: julian.id,
      artworkTitle: "Contemporary Weave",
      artworkYear: "2024",
      status: "Received",
    },
  });
  await prisma.inquiryMessage.create({
    data: {
      inquiryId: inq1.id,
      sender: "collector",
      text: "Expressing interest in the Contemporary Weave piece. Please provide provenance details.",
      timestamp: "10:30 AM",
    },
  });

  console.log(`Inquiries: 1`);

  // Create consultations
  await prisma.consultation.create({
    data: {
      userId: julian.id,
      expertName: "Dr. Amara Diop",
      expertTitle: "Director of West African Antiquities",
      expertAvatar: "AD",
      type: "ACQUISITION_ADVICE",
      status: "CONFIRMED",
      date: new Date("2026-07-15T14:00:00Z"),
      timeSlot: "2:00 PM – 3:00 PM",
      topic: "Benin Bronze Acquisition Strategy",
      notes: "Discuss investment potential of Benin bronzes.",
    },
  });

  console.log(`Consultations: 1`);

  // Create logistics
  const ship = await prisma.logisticsShipment.create({
    data: {
      userId: julian.id,
      artworkTitle: "Ife Terracotta Head",
      carrier: "Malca-Amit Premium Art Courier",
      status: "International Transit",
      estimatedDeliveryDate: "Jul 5, 2026",
      securityTier: "Level 5 Armed Vault Transport",
      insuranceCoverage: "€11,040,000 Policy",
    },
  });
  await prisma.shipmentUpdate.createMany({
    data: [
      { shipmentId: ship.id, date: "Jun 28", status: "Origin Hub Secured", location: "Fine Art Terminal, Paris CDG", description: "Item certified and packaged in temperature-shielded carbon boxes." },
      { shipmentId: ship.id, date: "Jun 30", status: "Customs Clearance", location: "Geneva Customs", description: "Documentation verified. Clearance in progress." },
    ],
  });

  console.log(`Logistics: 1`);

  // Create security records
  await prisma.securityRecord.create({
    data: {
      userId: julian.id,
      artworkTitle: "Benin Bronze Head",
      vaultLocation: "Geneva Freeport - Chamber I",
      fingerprintId: "FP-BENI-4821",
      smartContractAddress: "0x7a3f...8e2d (Aduna Registry V2)",
      lastInspectionDate: "Jun 10, 2026",
      temperatureHumidity: "20.3°C / 46.2% RH",
      insurancePolicyNumber: "AXA-MUSEUM-72914-M",
    },
  });

  console.log(`Security: 1`);

  // Create chat threads
  const thread = await prisma.chatThread.create({
    data: {
      clientName: "Julian Doe",
      clientRole: "collector",
      advisorName: "Dr. Fatima Benali",
      subject: "Igbo-Ukwu Bronze Vessel Provenance",
      status: "active",
      lastMessage: "Let me compile the radiometric carbon testing data for your review.",
      lastMessageTime: "2026-06-14 16:45 UTC",
      unreadCount: 1,
    },
  });
  await prisma.chatMessage.createMany({
    data: [
      { threadId: thread.id, senderId: "usr-001", senderName: "Julian Doe", senderRole: "collector", text: "Dr. Benali, I need the full provenance report for the Igbo-Ukwu vessel.", timestamp: "2026-06-14 14:30 UTC", read: true },
      { threadId: thread.id, senderId: "usr-003", senderName: "Dr. Fatima Benali", senderRole: "advisor", text: "Of course. The Igbo-Ukwu provenance chain is extensive. Let me compile the relevant documentation.", timestamp: "2026-06-14 15:15 UTC", read: true },
      { threadId: thread.id, senderId: "usr-003", senderName: "Dr. Fatima Benali", senderRole: "advisor", text: "Let me compile the radiometric carbon testing data for your review.", timestamp: "2026-06-14 16:45 UTC", read: false },
    ],
  });

  console.log(`Chat threads: 1`);

  // Create support tickets
  const ticket = await prisma.supportTicket.create({
    data: {
      userId: julian.id,
      clientName: "Julian Doe",
      clientRole: "collector",
      subject: "Certificate Download Issue",
      description: "Unable to download the COA PDF for my Benin Bronze Head acquisition.",
      status: "In Progress",
      priority: "Medium",
      createdDate: "2026-06-12",
      lastUpdate: "2026-06-14",
      assignedTo: "Helena Sterling",
    },
  });
  await prisma.ticketResponse.createMany({
    data: [
      { ticketId: ticket.id, author: "Helena Sterling", text: "We are investigating the download issue. The PDF generation service may need restarting.", timestamp: "2026-06-13 09:00 UTC" },
      { ticketId: ticket.id, author: "Admin", text: "Service restarted. Please try downloading again.", timestamp: "2026-06-14 11:30 UTC" },
    ],
  });

  console.log(`Support tickets: 1`);

  // Create audit logs
  await prisma.auditLog.createMany({
    data: [
      { userId: admin.id, action: "User registered: Julian Doe", resource: "User", resourceId: julian.id, txHash: "0x7f8a...1b2c" },
      { userId: admin.id, action: "Artwork added: Benin Bronze Head", resource: "Artwork", resourceId: artworks[2].id, txHash: "0xa1b2...3d4e" },
      { userId: julian.id, action: "Acquisition certified: Benin Bronze Head", resource: "Acquisition", resourceId: acq1.id, txHash: "0xc3d4...5e6f" },
      { userId: admin.id, action: "AML verification completed", resource: "User", resourceId: julian.id, txHash: "0xe5f6...7a8b" },
    ],
  });

  console.log(`Audit logs: 4`);

  // Create escrow
  await prisma.escrowTransaction.create({
    data: {
      artworkTitle: "Benin Bronze Head",
      buyerName: "Julian Doe",
      sellerName: "European Estate",
      amount: 8500000,
      status: "RELEASED",
      notes: "Funds verified and released to seller.",
    },
  });

  console.log(`Escrow: 1`);

  console.log("Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
