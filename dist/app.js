"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const artist_routes_1 = __importDefault(require("./routes/artist.routes"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
const artwork_routes_1 = __importDefault(require("./routes/artwork.routes"));
const image_routes_1 = __importDefault(require("./routes/image.routes"));
const provenance_routes_1 = __importDefault(require("./routes/provenance.routes"));
const certificate_routes_1 = __importDefault(require("./routes/certificate.routes"));
const favorite_routes_1 = __importDefault(require("./routes/favorite.routes"));
const reservation_routes_1 = __importDefault(require("./routes/reservation.routes"));
const por_routes_1 = __importDefault(require("./routes/por.routes"));
const consultation_routes_1 = __importDefault(require("./routes/consultation.routes"));
const order_routes_1 = __importDefault(require("./routes/order.routes"));
const audit_routes_1 = __importDefault(require("./routes/audit.routes"));
const dashboard_routes_1 = __importDefault(require("./routes/dashboard.routes"));
const inquiry_routes_1 = __importDefault(require("./routes/inquiry.routes"));
const logistics_routes_1 = __importDefault(require("./routes/logistics.routes"));
const security_routes_1 = __importDefault(require("./routes/security.routes"));
const escrow_routes_1 = __importDefault(require("./routes/escrow.routes"));
const adminAudit_routes_1 = __importDefault(require("./routes/adminAudit.routes"));
const adminArtworks_routes_1 = __importDefault(require("./routes/adminArtworks.routes"));
const adminCollectors_routes_1 = __importDefault(require("./routes/adminCollectors.routes"));
const advisor_routes_1 = __importDefault(require("./routes/advisor.routes"));
const chat_routes_1 = __importDefault(require("./routes/chat.routes"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
}));
app.use((0, morgan_1.default)("dev"));
const generalLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 200,
    message: { success: false, message: "Too many requests, please try again later" },
});
const authLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { success: false, message: "Too many auth attempts, please try again later" },
});
app.use("/api/", generalLimiter);
app.use("/api/v1/auth/login", authLimiter);
app.use("/api/v1/auth/register", authLimiter);
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ extended: true }));
// Core routes
app.use("/api/v1/auth", auth_routes_1.default);
app.use("/api/v1/users", user_routes_1.default);
app.use("/api/v1/artists", artist_routes_1.default);
app.use("/api/v1/categories", category_routes_1.default);
app.use("/api/v1/artworks", artwork_routes_1.default);
app.use("/api/v1", image_routes_1.default);
app.use("/api/v1", provenance_routes_1.default);
app.use("/api/v1/certificates", certificate_routes_1.default);
app.use("/api/v1/favorites", favorite_routes_1.default);
app.use("/api/v1/reservations", reservation_routes_1.default);
app.use("/api/v1/por", por_routes_1.default);
app.use("/api/v1/consultations", consultation_routes_1.default);
app.use("/api/v1/orders", order_routes_1.default);
app.use("/api/v1/audit", audit_routes_1.default);
// Dashboard routes
app.use("/api/v1/dashboard/acquisitions", dashboard_routes_1.default);
app.use("/api/v1/dashboard/inquiries", inquiry_routes_1.default);
app.use("/api/v1/dashboard/logistics", logistics_routes_1.default);
app.use("/api/v1/dashboard/security", security_routes_1.default);
// Admin routes
app.use("/api/v1/admin/artworks", adminArtworks_routes_1.default);
app.use("/api/v1/admin/collectors", adminCollectors_routes_1.default);
app.use("/api/v1/admin/escrow", escrow_routes_1.default);
app.use("/api/v1/admin/audit-logs", adminAudit_routes_1.default);
// Advisor routes
app.use("/api/v1/advisor", advisor_routes_1.default);
// Chat/Support routes
app.use("/api/v1/chat", chat_routes_1.default);
app.get("/api/v1/health", (_req, res) => {
    res.json({ success: true, message: "Africa Art API is running" });
});
app.use(errorHandler_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map