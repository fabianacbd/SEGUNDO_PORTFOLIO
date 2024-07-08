import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/public/twitter.png", "Twitter")}
${Button("/public/github.png.jpg", "GitHub")}
${Button("/public/linkedin.png.jpg", "LinkedIn")}
${Button("/public/telegram.png", "Telegram")}
</div>
`;