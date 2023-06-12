import { ScreenSizes } from "../../const";
import { useWindowSize } from "../../hooks/use-window-size";

export function Footer(): JSX.Element {
  const size = useWindowSize();

  return(
    <footer className="footer">
      {size.width !== undefined && size.width < ScreenSizes.Tablet
        ? 'qwerty'
        : 'wqerty wqerty wqerty wqerty wqerty wqerty wqerty '}
    </footer>
  );
}