import { WebView, WebViewProps } from "expo-web-view";
import { Text, useWindowDimensions } from "react-native";

type AType = WebViewProps;

export default function App() {
  // const aVar: AType = {};
  const windowWidth = useWindowDimensions().width;

  return (
    <WebView
      style={{
        width: windowWidth,
        height: 500,
        backgroundColor: "rgba(0,0,0,0.6)",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 35 }}>A text inside a view</Text>
    </WebView>
  );
}
