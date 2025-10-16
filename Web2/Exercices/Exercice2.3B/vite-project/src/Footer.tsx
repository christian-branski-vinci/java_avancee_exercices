interface FooterText {
    text: string
};

const Footer = (prop: FooterText) => {
    return (
        <footer>{prop.text}</footer>
    )
};
export default Footer;