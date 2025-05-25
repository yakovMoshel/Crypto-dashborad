"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectToMongoDB = async () => {
    try {
        await mongoose_1.default.connect('mongodb+srv://yakovmoshel:yakov_nitzan_m@cluster0.f53ui7h.mongodb.net/WatchListCrypto');
        console.log('✅ Connected to MongoDB');
    }
    catch (err) {
        console.error('❌ Failed to connect to MongoDB:', err);
        throw err;
    }
};
exports.connectToMongoDB = connectToMongoDB;
