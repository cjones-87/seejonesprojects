import { useContext } from 'react';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import { Button } from 'primereact/button';
import SidePanelButtonData from './data/SidePanelButtonData';

const SidePanelButtons = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div
      className="button"
      style={{
        color: 'white',
        textShadow: '2px 2px 2px indigo',
      }}
    >
      <div>
        <h5
          style={{
            textAlign: 'center',
            paddingTop: 10,
            color: !darkTheme ? 'whitesmoke' : '#ba68c8',
          }}
        >
          Stay connected with me & my work by following me on:
        </h5>
        <div
          className="template"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {SidePanelButtonData.map((button, index) => (
            <Button className={button.buttonClassName} key={index}>
              <i className={button.iconClassName} />
              <a href={button.href} target="_blank" rel="noreferrer noopener">
                <span className="px-3" style={{ color: 'white' }}>
                  {button.buttonText}
                </span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidePanelButtons;
