import "./styles.css";
import { useState } from "react";
const emojiStore = {
  "🤪": "Zany Face",
  "🤦": "Facepalm",
  "😒": "Unamused Face",
  "😈": "Smiling Face with Horns",
  "🔥": "Fire",
  "❤️": "Red Heart",
  "💯": "Hundred Points",
  "✨": "Sparkles",
  "💡": "Light Bulb",
  "💥": "Collision"
};

const emojis = Object.keys(emojiStore);

export default function App() {
  const [meaning, setMeaning] = useState("translation will appear here...");
  const [emoji, setEmoji] = useState("");
  const inputHandler = (e) => {
    let emoji = e.target.value;
    const meaning = emojiStore[emoji];
    if (meaning === undefined) {
      setMeaning("Emoji not found!");
      setEmoji(emoji);
    } else {
      setMeaning(meaning);
    }
  };
  const onEmojiClick = (emoji) => {
    const meaning = emojiStore[emoji];
    setMeaning(meaning);
  };
  return (
    <div className="App">
      <h1>emoji hunt</h1>
      <input onChange={inputHandler} placeholder="Search your emoji" />
      <div className="notFouncEmoji">{emoji}</div>
      <div className="translate">{meaning}</div>
      {emojis.map((emoji) => {
        return (
          <span key={emoji} onClick={() => onEmojiClick(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
