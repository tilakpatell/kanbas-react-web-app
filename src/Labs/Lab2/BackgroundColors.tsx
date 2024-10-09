export default function BackgroundColors() {
  return(
    <div id="wd-css-background-colors">
      <h3 className="wg-bg-color-blue wd-fg-color-white">Background color</h3>
      <p className="wd-bg-color-red wg-fg-color-black">
        This background of this paragraph is red but
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground is white
        </span>
      </p>
    </div>
  )
}
