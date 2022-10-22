import StartScreen from '../../pages/start-screen/start-screen';

type AppScreenProps = {
  cardsCount: number;
};

function App({cardsCount}: AppScreenProps): JSX.Element {
  return (
    <StartScreen cardsCount={cardsCount} />
  );
}

export default App;
