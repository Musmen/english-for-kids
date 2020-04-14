import successSound from '../assets/audio/success.mp3';
import correctSound from '../assets/audio/correct.mp3';

const mainPage = () => {
  const successButton = document.querySelector('#successButton');
  const audioSuccess = new Audio(successSound);
  const correctButton = document.querySelector('#correctButton');
  const audioCorrect = new Audio(correctSound);

  successButton.onclick = () => {
    audioSuccess.play();
  };
  correctButton.onclick = () => {
    audioCorrect.play();
  };
};

export default mainPage;
