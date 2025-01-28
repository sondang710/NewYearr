
const btnNo = document.querySelector(".btn-no");
    const btnYes = document.querySelector(".btn-yes"); // Button "Dạ, cóaaaa"
    const startWrapper = document.querySelector(".start-wrapper");
    const wrapper = document.querySelector(".wrapper");
    const leftLine = document.querySelector(".left-line");
    const leftHandle = document.querySelector(".left-handle");
    const loveSending = document.querySelector(".love-sending");
    const h1 = startWrapper.querySelector("h1");
    const originalText = h1.textContent;
document.addEventListener("DOMContentLoaded", () => {
    btnNo.addEventListener("click", () => {
        // Lấy kích thước và vị trí của .start-wrapper
        const wrapperRect = startWrapper.getBoundingClientRect();

        // Lấy kích thước của button
        const btnWidth = btnNo.offsetWidth;
        const btnHeight = btnNo.offsetHeight;

        // Tính phạm vi di chuyển (giới hạn trong .start-wrapper)
        const maxX = wrapperRect.width - btnWidth;
        const maxY = wrapperRect.height - btnHeight;

        // Tạo tọa độ ngẫu nhiên trong phạm vi
        const randomX = Math.random() * maxX + wrapperRect.left;
        const randomY = Math.random() * maxY + wrapperRect.top;

        // Cập nhật vị trí của button
        btnNo.style.position = "absolute";
        btnNo.style.left = `${randomX}px`;
        btnNo.style.top = `${randomY}px`;

        h1.textContent = "Eee giỡn mặt hả máaa";

        // Đổi lại nội dung ban đầu sau 2 giây
        setTimeout(() => {
            h1.textContent = originalText;
        }, 2000);
    });


    btnYes.addEventListener("click", () => {
        // Hiển thị .wrapper
        wrapper.style.display = "block";

        // Ẩn phần tử .start-page nếu cần
        document.querySelector(".start-page").style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", () => {

    // Hàm xử lý di chuyển và hiển thị
    const handleClick = () => {
        // Dịch chuyển left-line và left-handle
        leftLine.style.transition = "transform 0.5s ease";
        leftHandle.style.transition = "transform 0.5s ease";

        leftLine.style.transform = "translate(-60%, -40%)";
        leftHandle.style.transform = "translateY(50px)";

        // Hiển thị love-sending
        loveSending.classList.add("active");
    };

    // Lắng nghe sự kiện click trên cả hai phần tử
    leftLine.addEventListener("click", handleClick);
    leftHandle.addEventListener("click", handleClick);
});

document.addEventListener("DOMContentLoaded", () => {
    const rightLine = document.querySelector(".right-line");
    const rightHandle = document.querySelector(".right-handle");
    const futureSending = document.querySelector(".future-sending");
    const handleRightClick = () => {
        rightLine.style.transition = "transform 0.5s ease";
        rightHandle.style.transition = "transform 0.5s ease";

        rightLine.style.transform = "translate(-60%, -40%)";
        rightHandle.style.transform = "translateY(50px)";
        futureSending.classList.add("active");
    };

    // Lắng nghe sự kiện click trên cả hai phần tử
    rightLine.addEventListener("click", handleRightClick);
    rightHandle.addEventListener("click", handleRightClick);
});

document.addEventListener("DOMContentLoaded", () => {
    const loveSending = document.querySelector(".love-sending");
    const futureSending = document.querySelector(".future-sending");
    const rightLine = document.querySelector(".right-line");
    const rightHandle = document.querySelector(".right-handle");
    const leftLine = document.querySelector(".left-line");
    const leftHandle = document.querySelector(".left-handle");
    const mainText = document.querySelector(".main-text");

    // Hàm để ẩn tất cả các phần tử
    const hideAll = () => {
        loveSending.classList.remove("active");
        loveSending.style.visibility = "hidden";
        loveSending.style.opacity = "0";

        futureSending.classList.remove("active");
        futureSending.style.visibility = "hidden";
        futureSending.style.opacity = "0";

        mainText.style.visibility = "hidden";
    };

    // Hàm hiển thị một phần tử
    const showElement = (elementToShow) => {
        hideAll(); // Ẩn tất cả trước
        elementToShow.classList.add("active");
        elementToShow.style.visibility = "visible";
        elementToShow.style.opacity = "1";
    };

    // Sự kiện cho left-line hoặc left-handle
    leftLine.addEventListener("click", () => showElement(loveSending));
    leftHandle.addEventListener("click", () => showElement(loveSending));

    // Sự kiện cho right-line hoặc right-handle
    rightLine.addEventListener("click", () => showElement(futureSending));
    rightHandle.addEventListener("click", () => showElement(futureSending));
});