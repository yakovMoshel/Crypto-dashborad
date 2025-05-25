"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCoinHander = exports.addCoin = exports.getWatchlistHandler = void 0;
const watchlist_Service_1 = require("../services/watchlist.Service");
const crypto_Service_1 = require("../services/crypto.Service");
const watchlistSchema_1 = __importDefault(require("../models/watchlistSchema"));
const getWatchlistHandler = async (req, res) => {
    try {
        const watchlist = await (0, watchlist_Service_1.getAllWatchedCoins)();
        res.status(200).json(watchlist);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to get watchlist' });
    }
};
exports.getWatchlistHandler = getWatchlistHandler;
const addCoin = async (req, res) => {
    try {
        const { coinId } = req.body;
        if (!coinId) {
            res.status(400).json({ message: 'coinId is required' });
            return;
        }
        // נשלוף את כל המטבעות ונחפש את המטבע לפי ה-ID
        const allCoins = await (0, crypto_Service_1.fetchAndStoreCryptos)();
        const coin = allCoins.find((c) => c.id === coinId);
        if (!coin) {
            res.status(404).json({ message: 'Coin not found' });
            return;
        }
        // נבדוק אם כבר קיים ברשימת המעקב
        const alreadyExists = await watchlistSchema_1.default.findOne({ coinId });
        if (alreadyExists) {
            res.status(400).json({ message: 'Coin already in watchlist' });
            return;
        }
        // ניצור את הרשומה החדשה
        const newWatch = await watchlistSchema_1.default.create({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            image: coin.image,
            current_price: coin.current_price,
            market_cap: coin.market_cap,
            market_cap_rank: coin.market_cap_rank,
            total_volume: coin.total_volume,
            high_24h: coin.high_24h,
            low_24h: coin.low_24h,
            addedAt: new Date()
        });
        res.status(201).json(newWatch);
    }
    catch (err) {
        console.error("Error adding coin to watchlist:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.addCoin = addCoin;
const deleteCoinHander = async (req, res) => {
    try {
        const { coinId } = req.body;
        const deletedCoin = await (0, watchlist_Service_1.removeFromWatchList)(coinId);
        res.status(200).json(deletedCoin);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to delete coin' });
    }
};
exports.deleteCoinHander = deleteCoinHander;
