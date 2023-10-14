import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
const styles = {
    banner: {},
    size: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        height: "70px"
    }
};
function DeliveryBanner() {
    const [visible, setVisible] = useState(true);
    setTimeout(() => {
        setVisible(false);
    }, 10000);
    return (React.createElement("div", null,
        React.createElement(Alert, { show: visible, variant: "success", style: styles.size },
            React.createElement(Alert.Heading, null, "Free Delivery!"),
            React.createElement("p", null, "Over the festive season get free delivery on orders over \u00A350! These can be from the menu, customization or offers range."),
            React.createElement(Button, { onClick: () => setVisible(false), variant: "outline-success" }, "Thanks!"))));
}
export default DeliveryBanner;
