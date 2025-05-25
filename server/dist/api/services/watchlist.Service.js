"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromWatchList = exports.addCoinToWatchlist = exports.getAllWatchedCoins = void 0;
const watchlistSchema_1 = __importDefault(require("../models/watchlistSchema"));
const getAllWatchedCoins = async () => {
    try {
        const coins = await watchlistSchema_1.default.find({});
        return coins;
    }
    catch (error) {
        console.error('Failed to get watched coins:', error);
        throw error;
    }
};
exports.getAllWatchedCoins = getAllWatchedCoins;
const addCoinToWatchlist = async (coinId) => {
    const existing = await watchlistSchema_1.default.findOne({ id: coinId });
    if (existing)
        return existing;
    const newCoin = new watchlistSchema_1.default({ id: coinId });
    await newCoin.save();
    return newCoin;
};
exports.addCoinToWatchlist = addCoinToWatchlist;
const removeFromWatchList = async (coinId) => {
    const existing = await watchlistSchema_1.default.findOne({ id: coinId });
    if (!existing) {
        return;
    }
    await watchlistSchema_1.default.deleteOne({ id: coinId });
};
exports.removeFromWatchList = removeFromWatchList;
