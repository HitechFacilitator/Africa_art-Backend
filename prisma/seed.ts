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

  // Clear existing seed data (in FK order)
  await prisma.ticketResponse.deleteMany();
  await prisma.supportTicket.deleteMany();
  await prisma.chatMessage.deleteMany();
  await prisma.chatThreadReadStatus.deleteMany();
  await prisma.chatThread.deleteMany();
  await prisma.advisorActivity.deleteMany();
  await prisma.advisorPlacement.deleteMany();
  await prisma.advisorClient.deleteMany();
  await prisma.securityRecord.deleteMany();
  await prisma.shipmentUpdate.deleteMany();
  await prisma.logisticsShipment.deleteMany();
  await prisma.inquiryMessage.deleteMany();
  await prisma.inquiry.deleteMany();
  await prisma.auditLog.deleteMany();
  await prisma.escrowTransaction.deleteMany();
  await prisma.porMessage.deleteMany();
  await prisma.priceRequest.deleteMany();
  await prisma.consultation.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.reservation.deleteMany();
  await prisma.favorite.deleteMany();
  await prisma.bid.deleteMany();
  await prisma.auctionLot.deleteMany();
  await prisma.acquisitionProvenance.deleteMany();
  await prisma.acquisition.deleteMany();
  await prisma.provenanceChain.deleteMany();
  await prisma.provenanceRecord.deleteMany();
  await prisma.certificate.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.artworkImage.deleteMany();
  await prisma.artwork.deleteMany();
  await prisma.artist.deleteMany();
  await prisma.category.deleteMany();
  await prisma.memberApplication.deleteMany();
  await prisma.user.deleteMany();

  console.log("Cleared existing seed data.");

  const password = await bcrypt.hash("password123", 12);

  // Create users matching frontend mock data
  const julian = await prisma.user.upsert({
    where: { email: "julian.doe@adunagallery.com" },
    update: { password },
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
    update: { password },
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
    update: { password },
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
    update: { password },
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

  const support = await prisma.user.upsert({
    where: { email: "support@adunagallery.com" },
    update: { password },
    create: {
      email: "support@adunagallery.com",
      password,
      name: "Support Team",
      role: Role.SUPPORT,
      avatar: "ST",
      institution: "Aduna Gallery",
      emailVerified: true,
    },
  });

  const visitor = await prisma.user.upsert({
    where: { email: "visitor@example.com" },
    update: { password },
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
    prisma.artist.upsert({ where: { name: "Unknown Benin Artist" }, update: {}, create: { name: "Unknown Benin Artist", nationality: "Nigerian", biography: "Master bronze caster of the Benin Empire" } }),
    prisma.artist.upsert({ where: { name: "Ife Master" }, update: {}, create: { name: "Ife Master", nationality: "Nigerian", biography: "Unknown master of the Ife tradition" } }),
    prisma.artist.upsert({ where: { name: "Yoruba Artist" }, update: {}, create: { name: "Yoruba Artist", nationality: "Nigerian", biography: "Traditional Yoruba craftsman" } }),
    prisma.artist.upsert({ where: { name: "Akan Goldsmith" }, update: {}, create: { name: "Akan Goldsmith", nationality: "Ghanaian", biography: "Master goldsmith of the Akan people" } }),
    prisma.artist.upsert({ where: { name: "Kuba Master Carver" }, update: {}, create: { name: "Kuba Master Carver", nationality: "Congolese", biography: "Royal carver of the Kuba Kingdom" } }),
    prisma.artist.upsert({ where: { name: "Dogon Elder" }, update: {}, create: { name: "Dogon Elder", nationality: "Malian", biography: "Senior sculptor of the Dogon people" } }),
    prisma.artist.upsert({ where: { name: "Luba Court Artist" }, update: {}, create: { name: "Luba Court Artist", nationality: "Congolese", biography: "Artist of the Luba royal court" } }),
    prisma.artist.upsert({ where: { name: "Nok Sculptor" }, update: {}, create: { name: "Nok Sculptor", nationality: "Nigerian", biography: "Ancient Nok terracotta artist" } }),
  ]);

  // Create artworks matching frontend mock data
  const artworks = await Promise.all([
    prisma.artwork.upsert({
      where: { title: "Fang Reliquary Guardian" },
      update: {},
      create: {
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
    prisma.artwork.upsert({
      where: { title: "Ife Terracotta Head" },
      update: {},
      create: {
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ife_terracotta_head_1.jpg",
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
    prisma.artwork.upsert({
      where: { title: "Benin Bronze Relief Plaque" },
      update: {},
      create: {
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Two_warriors%2C_single_warrior%2C_Benin_bronzes_at_MFA.agr.jpg",
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
    prisma.artwork.upsert({
      where: { title: "Yoruba Ade Beaded Crown" },
      update: {},
      create: {
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
    prisma.artwork.upsert({
      where: { title: "Nok Terracotta Seated Figure" },
      update: {},
      create: {
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Nok_sculpture_Louvre_70-1998-11-1.jpg",
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
    prisma.artwork.upsert({
      where: { title: "Akan Gold Leaf Ceremonial Weight" },
      update: {},
      create: {
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Brooklyn_Museum_88.192.99_Gold_Weight.jpg",
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
    prisma.artwork.upsert({
      where: { title: "Kuba Ndop Royal Portrait Board" },
      update: {},
      create: {
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
    prisma.artwork.upsert({
      where: { title: "Dogon Tellem Ancestor Figure" },
      update: {},
      create: {
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Brooklyn_Museum_73.179.11_Standing_Figure_with_Arms_Raised.jpg",
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
    prisma.artwork.upsert({
      where: { title: "Luba Royal Ceremonial Shield" },
      update: {},
      create: {
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Brooklyn_Museum_22.1132_Ceremonial_Staff_Kibango.jpg",
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
    prisma.artwork.upsert({
      where: { title: "Chokwe Ciooko Divination Pendant" },
      update: {},
      create: {
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Chokwe_mask_CAC_2003.20.JPG",
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
    const existing = await prisma.provenanceChain.findFirst({ where: { artworkId: artwork.id } });
    if (!existing) {
      await prisma.provenanceChain.createMany({
        data: [
          { artworkId: artwork.id, entry: `Created in the ${artwork.era || "19th century"}` },
          { artworkId: artwork.id, entry: "Private collection, Europe" },
          { artworkId: artwork.id, entry: "Acquired through Aduna Gallery, 2024" },
        ],
      });
    }
  }

  // Create acquisitions for Julian
  const acq1 = await prisma.acquisition.create({
    data: {
      userId: julian.id,
      title: "Benin Bronze Head",
      era: "16th–17th Century",
      culture: "Edo / Benin Empire",
      status: "Certified",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Two_warriors%2C_single_warrior%2C_Benin_bronzes_at_MFA.agr.jpg",
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
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ife_terracotta_head_1.jpg",
      estimatedValueEur: 9200000,
      description: "Museum-grade Ife terracotta head, one of the finest in private hands.",
    },
  });

  console.log(`Acquisitions: 2`);

  // ─── Additional acquisitions for Julian ─────────────────────────
  const acq3 = await prisma.acquisition.create({
    data: {
      userId: julian.id,
      title: "Ashanti Ceremonial Stool",
      era: "19th Century",
      culture: "Akan Peoples",
      acquisitionDate: new Date("2024-08-14"),
      status: "Certified",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/Akan_Goldweights.jpg",
      estimatedValueEur: 7100000,
      description: "A hand-carved single block mahogany ceremonial stool with complex openwork geometric columns.",
    },
  });
  await prisma.acquisitionProvenance.createMany({
    data: [
      { acquisitionId: acq3.id, entry: "Stool House of Kumasi Nobles, Ghana" },
      { acquisitionId: acq3.id, entry: "MacDonald West African Collection, Edinburgh (1910 - 1968)" },
      { acquisitionId: acq3.id, entry: "Acquired via Aduna Gallery, 2024" },
    ],
  });

  const acq4 = await prisma.acquisition.create({
    data: {
      userId: julian.id,
      title: "Dogon Sanctuary Mask",
      era: "Late 18th Century",
      culture: "Dogon Peoples",
      acquisitionDate: new Date("2024-05-03"),
      status: "Certified",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Male_Figure_with_Raised_Arms_MET_DP302219.jpg",
      estimatedValueEur: 3200000,
      description: "A stunning Sirige tall mask carved with abstract rectangular geometric divisions.",
    },
  });

  const acq5 = await prisma.acquisition.create({
    data: {
      userId: julian.id,
      title: "Nok Terracotta Figure",
      era: "500 BC - 200 AD",
      culture: "Nok Culture",
      acquisitionDate: new Date("2025-03-20"),
      status: "Certified",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/Africa_Nok_Male_Figure_Kimbell.jpg",
      estimatedValueEur: 6500000,
      description: "A classic Nok sculpture showing large elliptical eyes and a sophisticated hollow-fired clay body.",
    },
  });

  console.log(`Acquisitions: 5 total`);

  // ─── Additional inquiries ──────────────────────────────────────
  const inq2 = await prisma.inquiry.create({
    data: {
      userId: julian.id,
      artworkTitle: "Kuba Ndop Board",
      artworkYear: "18th Century",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Brooklyn_Museum_61.33_Ndop_Portrait_of_King_Mishe_miShyaang_maMbul_%2810%29.jpg",
      status: "In Discussion",
      date: "Jun 05, 2026",
    },
  });
  await prisma.inquiryMessage.createMany({
    data: [
      { inquiryId: inq2.id, sender: "collector", text: "I watched the preview documentation of the Contemporary Weave. Is the provenance report from the artist's estate available?", timestamp: "Jun 05, 2026, 02:15 PM" },
      { inquiryId: inq2.id, sender: "curator", text: "Hello Julian. Yes, the Contemporary Weave has been vetted by the El Anatsui Foundation. Complete studio records, signature proofs, and custom shipping options are fully documented.", timestamp: "Jun 06, 2026, 10:04 AM" },
      { inquiryId: inq2.id, sender: "collector", text: "Splendid. I am extremely interested in incorporating this into my special exhibition chamber next month.", timestamp: "Jun 09, 2026, 09:12 AM" },
    ],
  });

  console.log(`Inquiries: 2`);

  // ─── Additional consultations ──────────────────────────────────
  await prisma.consultation.create({
    data: {
      userId: julian.id,
      expertName: "Christian Vanhoutte",
      expertTitle: "Chief Conservator & Materials Analyst",
      expertAvatar: "CV",
      type: "INVESTMENT_ADVICE",
      status: "PENDING",
      date: new Date("2026-06-22"),
      timeSlot: "11:00 - 12:30 GMT",
      topic: "Bronze Conservation Strategy (Verdigris Management)",
      notes: "A standard structural ultrasound audit will be run on the Benin Bronze Head.",
    },
  });
  await prisma.consultation.create({
    data: {
      userId: julian.id,
      expertName: "Dr. Amara Diop",
      expertTitle: "Director of West African Antiquities",
      expertAvatar: "AD",
      type: "ACQUISITION_ADVICE",
      status: "CONFIRMED",
      date: new Date("2026-07-03"),
      timeSlot: "10:00 - 11:00 GMT",
      topic: "Investment Portfolio Review — Q3 2026",
      notes: "Annual portfolio performance review with updated CAGR projections.",
    },
  });

  console.log(`Consultations: 3 total`);

  // ─── Consultations for Dr. Fatima Benali (advisor) ──────────────
  await prisma.consultation.create({
    data: {
      userId: julian.id,
      advisorId: fatima.id,
      expertName: "Dr. Fatima Benali",
      expertTitle: "Senior Advisor — African Antiquities",
      expertAvatar: "FB",
      type: "ACQUISITION_ADVICE",
      status: "CONFIRMED",
      date: new Date("2026-06-25"),
      timeSlot: "14:00 - 15:30 GMT",
      topic: "Benin Bronze Provenance Verification",
      notes: "Review provenance documentation for the Benin Bronze Head before final acquisition.",
    },
  });
  await prisma.consultation.create({
    data: {
      userId: amara.id,
      advisorId: fatima.id,
      expertName: "Dr. Fatima Benali",
      expertTitle: "Senior Advisor — African Antiquities",
      expertAvatar: "FB",
      type: "COLLECTION_REVIEW",
      status: "PENDING",
      date: new Date("2026-07-10"),
      timeSlot: "09:00 - 10:00 GMT",
      topic: "Contemporary African Art Collection Strategy",
      notes: "Annual review of collection acquisitions and market positioning.",
    },
  });

  console.log(`Consultations: 5 total (including advisor-linked)`);

  // ─── Additional logistics shipments ────────────────────────────
  const ship2 = await prisma.logisticsShipment.create({
    data: {
      userId: julian.id,
      artworkTitle: "Ife Terracotta Head",
      carrier: "Malca-Amit Premium Art Courier",
      status: "Customs Clearance",
      estimatedDeliveryDate: "Jun 19, 2026",
      securityTier: "Level 5 Armed Vault Transport",
      insuranceCoverage: "€10,000,000 Swiss Re Art Policy",
    },
  });
  await prisma.shipmentUpdate.createMany({
    data: [
      { shipmentId: ship2.id, date: "Jun 08, 2026", status: "Customs Holding Vetted", location: "Heathrow Security Terminal, London", description: "Vetting of physical export license from source heritage authorities finalized." },
      { shipmentId: ship2.id, date: "Jun 06, 2026", status: "In Transit", location: "Charles de Gaulle Cargo Safe, Paris", description: "Transferred via temperature-controlled, armored transport vehicle under escort." },
      { shipmentId: ship2.id, date: "Jun 04, 2026", status: "Departed Origin Hub", location: "Secured Fine Art Logistics Hub, Paris", description: "Cratered in triple-walled museum-grade moisture-seal crates." },
    ],
  });

  const ship3 = await prisma.logisticsShipment.create({
    data: {
      userId: julian.id,
      artworkTitle: "Luba Ancestor Staff",
      carrier: "Malca-Amit Premium Art Courier",
      status: "International Transit",
      estimatedDeliveryDate: "Jun 25, 2026",
      securityTier: "Level 4 Secure Transport",
      insuranceCoverage: "€3,500,000 Swiss Re Art Policy",
    },
  });
  await prisma.shipmentUpdate.createMany({
    data: [
      { shipmentId: ship3.id, date: "Jun 09, 2026", status: "In Transit", location: "Brussels Cargo Hub, Belgium", description: "Departed origin warehouse under armored escort." },
      { shipmentId: ship3.id, date: "Jun 07, 2026", status: "Origin Hub Secured", location: "Fine Art Terminal, Kinshasa", description: "Item certified, packaged in museum-grade shock-absorbent crate." },
    ],
  });

  console.log(`Logistics: 3 total`);

  // ─── Additional security records ───────────────────────────────
  await prisma.securityRecord.create({
    data: {
      userId: julian.id,
      artworkTitle: "Benin Bronze Head",
      vaultLocation: "Private Vault Sector B-4, Geneva FreePort",
      fingerprintId: "FP-BENIN-0918-B",
      smartContractAddress: "0x3C9a...82Fd (Aduna Registry V2)",
      lastInspectionDate: "May 12, 2026",
      temperatureHumidity: "20.2°C / 48.5% RH (Optimal)",
      insurancePolicyNumber: "AXA-MUSEUM-99120-J",
    },
  });
  await prisma.securityRecord.create({
    data: {
      userId: julian.id,
      artworkTitle: "Dogon Sanctuary Mask",
      vaultLocation: "Collector Private Display, Wing A",
      fingerprintId: "FP-DOGON-4412-M",
      smartContractAddress: "0x7E12...33Ca (Aduna Registry V2)",
      lastInspectionDate: "Jun 01, 2026",
      temperatureHumidity: "21.0°C / 45.0% RH (Stabilized)",
      insurancePolicyNumber: "AXA-MUSEUM-99120-K",
    },
  });
  await prisma.securityRecord.create({
    data: {
      userId: julian.id,
      artworkTitle: "Nok Terracotta Figure",
      vaultLocation: "Private Vault Sector A-2, Geneva FreePort",
      fingerprintId: "FP-NOK-5521-N",
      smartContractAddress: "0x4A8b...11Ef (Aduna Registry V2)",
      lastInspectionDate: "Jun 05, 2026",
      temperatureHumidity: "20.0°C / 47.2% RH (Optimal)",
      insurancePolicyNumber: "AXA-MUSEUM-99120-L",
    },
  });

  console.log(`Security: 4 total`);

  // ─── Additional chat threads ───────────────────────────────────
  const thread2 = await prisma.chatThread.create({
    data: {
      clientUserId: amara.id,
      advisorUserId: fatima.id,
      clientName: "Amara Nkosi",
      clientRole: "collector",
      advisorName: "Dr. Fatima Benali",
      subject: "Private Catalogue — Yoruba Crown Acquisition",
      status: "active",
      lastMessage: "The Yoruba Ade Crown is available for private viewing.",
      lastMessageTime: "2026-06-15 11:00 UTC",
      unreadCount: 1,
    },
  });
  await prisma.chatMessage.createMany({
    data: [
      { threadId: thread2.id, senderId: amara.id, senderName: "Amara Nkosi", senderRole: "collector", text: "Dr. Benali, I saw the Royal Beaded Crown in the private catalogue. Is it still available?", timestamp: "2026-06-14 16:00 UTC", read: true },
      { threadId: thread2.id, senderId: fatima.id, senderName: "Dr. Fatima Benali", senderRole: "advisor", text: "Yes, the Yoruba Ade Crown is still available. It is one of our finest pieces with intact glass beadwork.", timestamp: "2026-06-15 09:30 UTC", read: true },
      { threadId: thread2.id, senderId: fatima.id, senderName: "Dr. Fatima Benali", senderRole: "advisor", text: "The Yoruba Ade Crown is available for private viewing. Would you like to schedule a visit?", timestamp: "2026-06-15 11:00 UTC", read: false },
    ],
  });

  const thread3 = await prisma.chatThread.create({
    data: {
      clientUserId: visitor.id,
      advisorUserId: fatima.id,
      clientName: "Guest Visitor",
      clientRole: "visitor",
      advisorName: "Helena Sterling",
      subject: "General Inquiry — African Art Authentication",
      status: "active",
      lastMessage: "We offer authentication services starting from €500.",
      lastMessageTime: "2026-06-15 13:00 UTC",
      unreadCount: 0,
    },
  });
  await prisma.chatMessage.createMany({
    data: [
      { threadId: thread3.id, senderId: visitor.id, senderName: "Guest Visitor", senderRole: "visitor", text: "Hello, I have a Benin Bronze piece that I would like authenticated. What is the process?", timestamp: "2026-06-15 10:00 UTC", read: true },
      { threadId: thread3.id, senderId: fatima.id, senderName: "Helena Sterling", senderRole: "advisor", text: "We offer authentication services starting from €500. Would you like to proceed?", timestamp: "2026-06-15 13:00 UTC", read: true },
    ],
  });

  console.log(`Chat threads: 3 total`);

  // ─── Additional support tickets ────────────────────────────────
  const ticket2 = await prisma.supportTicket.create({
    data: {
      userId: amara.id,
      clientName: "Amara Nkosi",
      clientRole: "collector",
      subject: "Escrow Status Inquiry",
      description: "I would like to know the current status of my escrow transaction.",
      status: "Open",
      priority: "Low",
      createdDate: "2026-06-15",
      lastUpdate: "2026-06-15",
      assignedTo: "Financial Team",
    },
  });
  await prisma.ticketResponse.createMany({
    data: [
      { ticketId: ticket2.id, author: "Amara Nkosi", text: "I would like to know the current status of my escrow transaction.", timestamp: "2026-06-15 08:00 UTC" },
    ],
  });

  const ticket3 = await prisma.supportTicket.create({
    data: {
      userId: fatima.id,
      clientName: "Dr. Fatima Benali",
      clientRole: "advisor",
      subject: "Consultation Scheduling Conflict",
      description: "Two of my consultations are scheduled at the same time slot on June 20.",
      status: "Resolved",
      priority: "High",
      createdDate: "2026-06-13",
      lastUpdate: "2026-06-14",
      assignedTo: "Operations Team",
    },
  });
  await prisma.ticketResponse.createMany({
    data: [
      { ticketId: ticket3.id, author: "Dr. Fatima Benali", text: "Two of my consultations are scheduled at the same time slot on June 20.", timestamp: "2026-06-13 14:00 UTC" },
      { ticketId: ticket3.id, author: "Support", text: "We have rescheduled the consultation with M. Koffi to June 21 at 11:00 GMT.", timestamp: "2026-06-14 09:00 UTC" },
      { ticketId: ticket3.id, author: "Dr. Fatima Benali", text: "Thank you, that works perfectly.", timestamp: "2026-06-14 09:30 UTC" },
    ],
  });

  console.log(`Support tickets: 3 total`);

  // ─── Additional audit logs ─────────────────────────────────────
  await prisma.auditLog.createMany({
    data: [
      { userId: admin.id, action: "Artwork status changed to Live", resource: "Artwork", resourceId: artworks[0].id, txHash: "0x7f3a...c912", signed: true },
      { userId: fatima.id, action: "Collector KYC verified for COL-004", resource: "User", resourceId: admin.id, txHash: "0x2b8e...d456", signed: true },
      { userId: julian.id, action: "Escrow TX funds locked", resource: "Escrow", txHash: "0x9c1f...a738", signed: false },
      { userId: admin.id, action: "Compliance scan completed for artwork", resource: "Artwork", resourceId: artworks[2].id, txHash: "0x4e6d...b190", signed: true },
      { userId: fatima.id, action: "New artwork draft created", resource: "Artwork", resourceId: artworks[3].id, txHash: "0x1a5c...e824", signed: true },
      { userId: julian.id, action: "Settings updated: regulatory email changed", resource: "User", resourceId: julian.id, txHash: "0x8d2b...f567", signed: true },
      { userId: admin.id, action: "New collector enrolled: Amara Nkosi", resource: "User", resourceId: amara.id, txHash: "0x5d7e...a1b9", signed: true },
    ],
  });

  console.log(`Audit logs: 11 total`);

  // ─── Additional escrow transactions ────────────────────────────
  await prisma.escrowTransaction.create({
    data: {
      artworkTitle: "Gold Ashanti Ceremonial Weights",
      buyerName: "M. Koffi",
      sellerName: "Aduna Gallery",
      amount: 150000,
      status: "RELEASED",
      notes: "Successfully completed. Funds disbursed to seller.",
    },
  });
  await prisma.escrowTransaction.create({
    data: {
      artworkTitle: "Ndop Ceremonial King Portrait",
      buyerName: "J. Rothschild",
      sellerName: "Private Estate, Paris",
      amount: 510000,
      status: "DISPUTED",
      notes: "Buyer initiated dispute due to provenance document discrepancy. Under arbitration.",
    },
  });
  await prisma.escrowTransaction.create({
    data: {
      artworkTitle: "Dogon Tellem Ancestor Figure",
      buyerName: "Museum of African Art, Dakar",
      sellerName: "Aduna Gallery",
      amount: 380000,
      status: "HELD",
      notes: "Institutional acquisition. Awaiting museum board final approval.",
    },
  });

  console.log(`Escrow: 4 total`);

  // ─── Advisor data ──────────────────────────────────────────────
  // Advisor clients
  await prisma.advisorClient.createMany({
    data: [
      { advisorId: fatima.id, name: "E. Sterling", email: "e.sterling@sterlingfoundation.org", tier: "VIP", country: "United Kingdom", avatarColor: "#C5A059", totalSpent: 4200000, acquisitionsCount: 7, satisfactionScore: 98, lastContact: "2026-06-15", interests: '["Benin Bronzes","Yoruba Art","Investment-grade pieces"]' },
      { advisorId: fatima.id, name: "J. Rothschild", email: "j.rothschild@rothschildart.com", tier: "VIP", country: "Switzerland", avatarColor: "#B35C44", totalSpent: 8900000, acquisitionsCount: 12, satisfactionScore: 95, lastContact: "2026-06-14", interests: '["Kuba Art","Pre-Columbian","High-value sculptures"]' },
      { advisorId: fatima.id, name: "Sheikh Al-Maktoum", email: "office@almaktoum-collect.ae", tier: "Prestige", country: "UAE", avatarColor: "#0F0F0F", totalSpent: 15600000, acquisitionsCount: 23, satisfactionScore: 99, lastContact: "2026-06-15", interests: '["West African Bronzes","Egyptian Antiquities","Investment portfolios"]' },
      { advisorId: fatima.id, name: "M. Koffi", email: "m.koffi@lagosartgroup.ng", tier: "Standard", country: "Nigeria", avatarColor: "#6B8E23", totalSpent: 750000, acquisitionsCount: 3, satisfactionScore: 88, lastContact: "2026-06-10", interests: '["Nigerian Contemporary","Nok Terracotta","Entry-level collectibles"]' },
      { advisorId: fatima.id, name: "Museum of African Art, Dakar", email: "acquisitions@maa.sn", tier: "VIP", country: "Senegal", avatarColor: "#8B4513", totalSpent: 3100000, acquisitionsCount: 5, satisfactionScore: 96, lastContact: "2026-06-12", interests: '["Museum-grade pieces","Institutional loans","Cultural heritage"]' },
      { advisorId: fatima.id, name: "T. Nakamura", email: "t.nakamura@tokyofineart.jp", tier: "Prestige", country: "Japan", avatarColor: "#DC143C", totalSpent: 2800000, acquisitionsCount: 4, satisfactionScore: 92, lastContact: "2026-06-08", interests: '["Contemporary African","Dogon Art","Investment diversification"]' },
    ],
  });

  // Advisor placements
  await prisma.advisorPlacement.createMany({
    data: [
      { userId: fatima.id, artworkTitle: "Igbo-Ukwu Bronze Vessel", artworkCulture: "Igbo Culture (Nigeria)", artworkEra: "9th Century", imageUrl: "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&q=80", valuation: 2200000, commission: 110000, clientName: "E. Sterling", status: "Under Review", notes: "Client reviewing XRF analysis. Expected decision by June 20.", proposedDate: new Date("2026-06-10") },
      { userId: fatima.id, artworkTitle: "Ndop Ceremonial King Portrait", artworkCulture: "Kuba Kingdom (DR Congo)", artworkEra: "18th Century", imageUrl: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80", valuation: 510000, commission: 25500, clientName: "J. Rothschild", status: "Proposed", notes: "Pending dispute resolution on prior transaction.", proposedDate: new Date("2026-06-12") },
      { userId: fatima.id, artworkTitle: "Commemorative Oba Head", artworkCulture: "Benin Empire (Nigeria)", artworkEra: "16th Century", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ92I1jZERzyaqiKc3FH4C9WCoalLYXn4QtDJIh9ZxMxNszZAyIVEgqplLCo7hV6V2HH7-BoQadYiRfZZ2rRVU2KyFezQYJuPejkEXFZmCocL68oD0FhhmK9qjLDUo_dGaLRJjMVDik4XNPGjB6Oc9qTanNVOjjccILVz6KJ9t75nNkB6_MXRhluItt8QhY_hJT0f1IjvtTbYQtOVAAFWxowRUhcdAARMvXHJ_EcwLFlZ4EPwj2Hy7iJOq7_ZanC7qnp6Kfj7IvA", valuation: 1350000, commission: 67500, clientName: "Sheikh Al-Maktoum", status: "Accepted", notes: "Client accepted. Escrow in progress.", proposedDate: new Date("2026-06-05") },
      { userId: fatima.id, artworkTitle: "Gold Ashanti Ceremonial Weights", artworkCulture: "Akan Culture (Ghana)", artworkEra: "18th Century", imageUrl: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?auto=format&fit=crop&q=80", valuation: 150000, commission: 7500, clientName: "M. Koffi", status: "Proposed", notes: "Entry-level recommendation. Good investment potential.", proposedDate: new Date("2026-06-14") },
      { userId: fatima.id, artworkTitle: "Dogon Tellem Ancestor Figure", artworkCulture: "Dogon Peoples (Mali)", artworkEra: "17th Century", imageUrl: "https://images.unsplash.com/photo-1501472312651-726afd116ff1?auto=format&fit=crop&q=80", valuation: 380000, commission: 19000, clientName: "Museum of African Art, Dakar", status: "Completed", notes: "Museum acquisition completed. Loan agreement signed.", proposedDate: new Date("2026-05-28") },
    ],
  });

  // Advisor activities
  await prisma.advisorActivity.createMany({
    data: [
      { type: "consultation", title: "Consultation Completed", description: "Video advisory session with Sheikh Al-Maktoum — West African Bronze Portfolio", timestamp: "2026-06-15 09:45 UTC", icon: "video" },
      { type: "placement", title: "Placement Accepted", description: "Commemorative Oba Head accepted by Sheikh Al-Maktoum — Escrow initiated", timestamp: "2026-06-15 10:12 UTC", icon: "check" },
      { type: "client", title: "Client Update", description: "E. Sterling requested additional XRF analysis for Igbo-Ukwu Bronze Vessel", timestamp: "2026-06-15 11:30 UTC", icon: "user" },
      { type: "system", title: "Escrow Alert", description: "TX dispute initiated by J. Rothschild — Ndop King Portrait. Under arbitration.", timestamp: "2026-06-14 16:22 UTC", icon: "alert" },
      { type: "consultation", title: "Consultation Scheduled", description: "Video advisory with T. Nakamura — Contemporary African Sculpture investment", timestamp: "2026-06-14 08:00 UTC", icon: "calendar" },
      { type: "placement", title: "Placement Proposed", description: "Gold Ashanti Ceremonial Weights proposed to M. Koffi — Entry-level recommendation", timestamp: "2026-06-14 14:15 UTC", icon: "send" },
      { type: "client", title: "Loan Agreement Signed", description: "Museum of African Art, Dakar — Dogon Tellem Ancestor Figure 3-month exhibition", timestamp: "2026-06-12 15:30 UTC", icon: "file" },
      { type: "system", title: "Commission Payout", description: "€19,000 commission disbursed for Dogon Tellem Ancestor Figure placement", timestamp: "2026-06-12 17:00 UTC", icon: "dollar" },
    ],
  });

  console.log(`Advisor data seeded`);

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
