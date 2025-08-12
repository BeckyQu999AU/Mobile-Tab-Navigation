const homeBtn = document.getElementById('home-btn');
const workBtn = document.getElementById('work-btn');
const blogBtn = document.getElementById('blog-btn');
const aboutBtn = document.getElementById('about-btn');
const contents = document.querySelectorAll('.content');
const btns = [homeBtn, workBtn, blogBtn, aboutBtn];

btns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();

    btn.classList.add('active');
    contents[idx].classList.add('show');
  });
});

const hideAllContents = () => {
  contents.forEach((content) => {
    content.classList.remove('show');
  });
};

const hideAllItems = () => {
  btns.forEach((btn) => btn.classList.remove('active'));
};
