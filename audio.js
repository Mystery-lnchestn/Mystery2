// audio.js - 专门管音乐的模块
const bgm = document.getElementById('bgm');
let musicStarted = false;

export function initAudio() {
    bgm.volume = 0.5; // 初始音量
    // 用户第一次交互时播放（绕过浏览器限制）
    const startMusic = () => {
        if (musicStarted) return;
        musicStarted = true;
        bgm.play().catch(err => console.log('播放被拦:', err));
    };
    // 暴露给全局，方便其他文件调用
    window.startBGM = startMusic;
}

export function toggleMute() {
    bgm.volume = bgm.volume > 0 ? 0 : 0.5;
    return bgm.volume > 0;
}
