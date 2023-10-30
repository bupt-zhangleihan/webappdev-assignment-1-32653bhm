document.addEventListener("DOMContentLoaded", function () {
    const dogImage = document.getElementById("dogImage");
    const getRandomDogButton = document.getElementById("getRandomDog");
  
    // 请求随机小狗的图片的函数
    async function getRandomDogImage() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (response.ok) {
          const data = await response.json();
          const imageUrl = data.message;
          dogImage.src = imageUrl;
        }
      } catch (error) {
        console.error("获取小狗的图片时出错:", error);
      }
    }
  
    // 初始化页面时加载一个随机小狗的图片
    getRandomDogImage();
  
    // 点击按钮时获取新的随机小狗的图片
    getRandomDogButton.addEventListener("click", getRandomDogImage);
  });
  