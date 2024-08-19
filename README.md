# React Ko-Fi ☕

React Ko-Fi is a collection of React components that displays various Ko-Fi widgets in React:

1. **KoFiDialog**: A Ko-Fi button that opens dialog displaying the Ko-Fi widget.
2. **KoFiButton**: A button that opens a Ko-Fi website in a new tab.
3. **KoFiWidget**: The Ko-Fi floating widget as a React component.
4. **KoFiPanel**: The Ko-Fi panel widget as a React component.

These components are made by [Prototypr](https://prototypr.io) and make it easier to display and customise Ko-Fi widgets in your React project. There's also an additional dialog component that opens a Ko-Fi widget in a modal.

`npm install react-kofi`

To use it in your project, import the components you need, along with the css:

```jsx
import { KoFiDialog, KoFiButton, KoFiWidget, KoFiPanel } from "react-kofi";
import "react-kofi/dist/styles.css";
```

#### Support us on Ko-Fi

If you find this package useful, you can support us on Ko-Fi too (or just star the repo):

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y71QU45)

---

### KofiDialog

The KofiDialog component displays a Ko-Fi button that opens a dialog containing the Ko-Fi donation panel.
It's a modal that opens when the user clicks the button.

Created with a [Radix Dialog](https://www.radix-ui.com/docs/components/dialog), this component essentially embeds the Ko-Fi Panel inside a dialog, so you can present the panel on click:

![KoFi Dialog](https://prototypr-media.sfo2.digitaloceanspaces.com/strapi/92b5d87a75db21dee3181e132447f367.png)

```jsx
<KoFiDialog
  color="#00b4f7"
  textColor="#fff"
  id="prototypr"
  label="Support me"
  padding={0}
  width={400}
  iframe={false}
  buttonRadius="8px"
/>
```

| Prop         | Description                                                                                        | Default Value |
| ------------ | -------------------------------------------------------------------------------------------------- | ------------- |
| color        | Background color of the Ko-Fi button                                                               | "#00b4f7"     |
| textColor    | Text color of the Ko-Fi button                                                                     | "#fff"        |
| id           | Your Ko-Fi ID (see your profile url)                                                               | "prototypr"   |
| label        | Text displayed on the Ko-Fi button                                                                 | "Support me"  |
| padding      | Padding around the dialog content                                                                  | 0             |
| width        | Width of the dialog                                                                                | 400           |
| iframe       | Not needed if you supply the id prop. Here you can paste in the iframe code from the Ko-Fi website | false         |
| buttonRadius | Border radius of the Ko-Fi button                                                                  | "8px"         |

---

### KoFiButton

Just a button that opens a Ko-Fi website in a new tab. The button is styled with a bit of tailwindcss and a separate kofi css sheet.

![KoFi Button](https://prototypr-media.sfo2.digitaloceanspaces.com/strapi/dacbd3ceb82a9f8e141e3db4bfb652a6.png)

```jsx
<KoFiButton
  color="#00b4f7"
  id="prototypr"
  label="Support me on Ko-Fi"
  radius="12px"
/>
```

| Prop   | Description                          | Default Value         |
| ------ | ------------------------------------ | --------------------- |
| color  | Background color of the Ko-Fi button | "#00b4f7"             |
| id     | Your Ko-Fi ID (see your profile url) | "prototypr"           |
| label  | Text displayed on the Ko-Fi button   | "Support me on Ko-Fi" |
| radius | Border radius of the Ko-Fi button    | "12px"                |

---

### KoFiWidget

The KoFiWidget component displays a Ko-Fi floating widget as a React component. The Ko-Fi button is attached to the bottom left of the page, and you can click it to open the donation panel.

![KoFi Widget](https://prototypr-media.sfo2.digitaloceanspaces.com/strapi/9f4eae2499809f5617d713db4d5947ef.png)


```jsx
<KoFiWidget
  attachOnScroll={false}
  id="prototypr"
  label="Support me"
  color="#00b9fe"
  textColor="#fff"
/>
```

| Prop           | Description                            | Default Value |
| -------------- | -------------------------------------- | ------------- |
| attachOnScroll | Whether to attach the widget on scroll | false         |
| id             | Your Ko-Fi ID (see your profile url)   | "prototypr"   |
| label          | Text displayed on the Ko-Fi widget     | "Support me"  |
| color          | Background color of the Ko-Fi widget   | "#00b9fe"     |
| textColor      | Text color of the Ko-Fi widget         | "#fff"        |

**Note**: if you use `attachOnScroll`, the Ko-Fi widget script loads and attaches only when you scroll down the page. This is useful if you don't want to load the widget straight away which can be better for page load performance.

---

### KoFiPanel

The KoFiPanel component displays the full Ko-Fi donation panel as a React component.

![KoFi Panel](https://prototypr-media.sfo2.digitaloceanspaces.com/strapi/23e72396cfc20d64f88ba10d711d55ea.png)


```jsx
<KoFiPanel id="prototypr" />
```

---

## Optional for tailwind projects

The general styles (e.g. the modal, padding, etc.) are implemented with tailwindcss, and then a separate kofi.css stylesheet is used to style the Ko-Fi widget.

If your project already uses tailwindcss, you can add this to your tailwind config:

```
module.exports = {
content: ["./node_modules/react-kofi/dist/**/*.{js,ts,jsx,tsx}",],
```

and then only import the kofi stylesheet separately to avoid conflicts:

```jsx
import "react-kofi/dist/kofi.css";
```