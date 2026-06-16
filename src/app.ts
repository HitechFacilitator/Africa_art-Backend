import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import errorHandler from "./middlewares/errorHandler";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import artistRoutes from "./routes/artist.routes";
import categoryRoutes from "./routes/category.routes";
import artworkRoutes from "./routes/artwork.routes";
import imageRoutes from "./routes/image.routes";
import provenanceRoutes from "./routes/provenance.routes";
import certificateRoutes from "./routes/certificate.routes";
import favoriteRoutes from "./routes/favorite.routes";
import reservationRoutes from "./routes/reservation.routes";
import porRoutes from "./routes/por.routes";
import consultationRoutes from "./routes/consultation.routes";
import orderRoutes from "./routes/order.routes";
import auditRoutes from "./routes/audit.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import inquiryRoutes from "./routes/inquiry.routes";
import logisticsRoutes from "./routes/logistics.routes";
import securityRoutes from "./routes/security.routes";
import escrowRoutes from "./routes/escrow.routes";
import adminAuditRoutes from "./routes/adminAudit.routes";
import advisorRoutes from "./routes/advisor.routes";
import chatRoutes from "./routes/chat.routes";

const app = express();

app.use(helmet());

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
}));

app.use(morgan("dev"));

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { success: false, message: "Too many requests, please try again later" },
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: "Too many auth attempts, please try again later" },
});

app.use("/api/", generalLimiter);
app.use("/api/v1/auth/login", authLimiter);
app.use("/api/v1/auth/register", authLimiter);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Core routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/artists", artistRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/artworks", artworkRoutes);
app.use("/api/v1", imageRoutes);
app.use("/api/v1", provenanceRoutes);
app.use("/api/v1/certificates", certificateRoutes);
app.use("/api/v1/favorites", favoriteRoutes);
app.use("/api/v1/reservations", reservationRoutes);
app.use("/api/v1/por", porRoutes);
app.use("/api/v1/consultations", consultationRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/audit", auditRoutes);

// Dashboard routes
app.use("/api/v1/dashboard/acquisitions", dashboardRoutes);
app.use("/api/v1/dashboard/inquiries", inquiryRoutes);
app.use("/api/v1/dashboard/logistics", logisticsRoutes);
app.use("/api/v1/dashboard/security", securityRoutes);

// Admin routes
app.use("/api/v1/admin/escrow", escrowRoutes);
app.use("/api/v1/admin/audit-logs", adminAuditRoutes);

// Advisor routes
app.use("/api/v1/advisor", advisorRoutes);

// Chat/Support routes
app.use("/api/v1/chat", chatRoutes);

app.get("/api/v1/health", (_req, res) => {
  res.json({ success: true, message: "Africa Art API is running" });
});

app.use(errorHandler);

export default app;
