import './index.scss';
import { StrictMode } from 'react';
import ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(
    <StrictMode>
        <div id="content">
            <h1 id="title">Hello, World</h1>
            <p>
                This, app is powered by:
                <ul>
                    <li>React</li>
                    <li>Vite</li>
                    <li>Typescript</li>
                    <li>Sass</li>
                </ul>
                And code quality is ensure by:
                <ul>
                    <li>ESLint</li>
                    <li>Stylelint</li>
                </ul>
            </p>
        </div>
    </StrictMode>,
);
