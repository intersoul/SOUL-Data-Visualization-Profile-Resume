// 禁止用户使用快捷键保存页面
document.addEventListener('keydown', function (event) {
    // 判断是否按下了 Ctrl 键并且同时按下了 S 键（keyCode 83）
    if (event.ctrlKey && (event.key === 's' || event.keyCode === 83)) {
        // 阻止默认行为（保存页面）
        event.preventDefault();
        // 返回 false，防止浏览器执行其他默认操作
        return false;
    }
});

//平滑动画滚动到指定位置
document.addEventListener('DOMContentLoaded', function () {
    // 获取所有菜单项
    var menuItems = document.querySelectorAll('.SOUL-header-menu-item');

    // 获取按钮元素
    var homeButton = document.querySelector('.home-button');

    // 为每个菜单项添加点击事件监听器
    menuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // 阻止默认链接行为

            // 获取目标滚动位置的 ID
            var targetId = item.getAttribute('href');

            // 获取目标元素的位置
            var targetElement = document.querySelector(targetId);
            var targetOffset = targetElement.offsetTop;

            // 平滑滚动到目标位置
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth' // 平滑滚动行为
            });
        });
    });

    // 添加点击事件监听器到按钮
    homeButton.addEventListener('click', function (event) {
        event.preventDefault(); // 阻止默认链接行为

        // 获取目标滚动位置的 ID
        var targetId = homeButton.getAttribute('href');

        // 获取目标元素的位置
        var targetElement = document.querySelector(targetId);
        var targetOffset = targetElement.offsetTop;

        // 平滑滚动到目标位置
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth' // 平滑滚动行为
        });
    });
});


// 图片轮播效果
function Sliding_effects() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.portfolio__content');
    const nextBtn = document.querySelector('.button-next');
    const prevBtn = document.querySelector('.button-prev');

    function showSlide(slideIndex) {
        // 隐藏所有slide
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });

        // 更新当前页索引
        currentSlide = slideIndex;

        // 如果到了最后一页，禁用右翻按钮
        if (currentSlide === slides.length - 1) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }

        // 如果在第一页，禁用左翻按钮
        if (currentSlide === 0) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }
    }

    // 初始化时显示第一个slide
    showSlide(0);

    // 添加左右翻页按钮事件监听器
    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    });
}

// 禁止右键菜单
// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault(); // 阻止默认右键菜单行为
// }, false);

// 检测F12键
document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault(); // 阻止F12按键默认行为
        // 可以在此处添加警告信息等操作
        alert('开发人员工具已被禁用');
    }
}, false);


function music_JayChou() {
    var audioElement = document.getElementById('audioElement');
    var audioCtx;
    var audioSrc;
    var analyser;
    // 添加自动播放功能
    // window.onload = function () {
    //     audioElement.play();
    // };

    audioElement.onplay = function () {
        // 检查AudioContext是否已被创建
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            audioSrc = audioCtx.createMediaElementSource(audioElement);
            analyser = audioCtx.createAnalyser();
            audioSrc.connect(analyser);
            audioSrc.connect(audioCtx.destination);
        }

        var frequencyData = new Uint8Array(100);
        var myhist = document.getElementsByTagName("rect");

        function everyViz() {
            analyser.getByteFrequencyData(frequencyData);
            for (var idx in myhist) {
                if (myhist[idx].getAttribute && frequencyData[idx]) {
                    myhist[idx].setAttribute("y", 300 - frequencyData[idx]);
                    myhist[idx].setAttribute("height", frequencyData[idx]);
                }
            }
        }
        window.setInterval(everyViz, 20);
    };

    // 初始化SVG长方形
    var svgWidth = window.innerWidth * 0.98;
    document.getElementById('wcSvg').setAttribute("width", svgWidth);
    for (var i = 0; i < 100; i++) {
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", i * svgWidth / 100);
        rect.setAttribute("width", svgWidth * 0.9 / 100);
        rect.setAttribute("y", 300);
        rect.setAttribute("height", 0);
        rect.style.fill = "rgba(95, 236, 154)";
        document.getElementById('wcSvg').appendChild(rect);
    }
}
