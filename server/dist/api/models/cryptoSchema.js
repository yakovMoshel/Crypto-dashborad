"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoSchema = exports.CryptoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.CryptoSchema = new mongoose_1.default.Schema({
    id: String,
    symbol: String,
    name: String,
    image: String,
    current_price: Number,
    market_cap: Number,
    market_cap_rank: Number,
    total_volume: Number,
    high_24h: Number,
    low_24h: Number,
});
exports.cryptoSchema = mongoose_1.default.model("Crypto", exports.CryptoSchema);
