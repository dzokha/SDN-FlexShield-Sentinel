// src/background/service-worker.js

// Import hàm và hằng số từ module
import { calculateRiskScore, RISK_LEVELS } from '../modules/risk-calculator.js';
import { logger } from '../modules/logger.js';

// Lắng nghe sự kiện cài đặt extension
chrome.runtime.onInstalled.addListener(() => {
    logger("SDN-FlexShield: Sentinel đã được kích hoạt.");
});

// Lắng nghe tin nhắn từ Popup hoặc Content Script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "get_score") {
        const score = calculateRiskScore(message.data.indicators);
        
        let level = RISK_LEVELS.LOW;
        if (score >= 70) level = RISK_LEVELS.HIGH;
        else if (score >= 40) level = RISK_LEVELS.MEDIUM;

        sendResponse({ score, level });
    }
    return true; // Giữ kênh giao tiếp mở cho phản hồi bất đồng bộ
});


