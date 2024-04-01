import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';


export default function Ellipse({ text }) {
  const svgXml = `
<svg width="389" height="350" viewBox="0 13 389 350" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
      d="M389 175C389 197.981 383.969 220.738 374.195 241.97C364.42 263.202 350.093 282.493 332.032 298.744C313.971 314.994 292.53 327.884 268.932 336.679C245.334 345.473 220.042 350 194.5 350C168.958 350 143.666 345.473 120.068 336.679C96.4702 327.884 75.0287 314.994 56.9677 298.744C38.9067 282.493 24.58 263.202 14.8054 241.97C5.03089 220.738 -2.23296e-06 197.981 0 175L0 0L185 0H389V175Z"
      fill="url(#paint0_linear_258_11)" />
  <defs>
      <linearGradient id="paint0_linear_258_11" x1="3.56876e-07" y1="71" x2="241" y2="303"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#007DFF" />
          <stop offset="1" stop-color="#004B99" />
      </linearGradient>
  </defs>
    <text x="50%" y="40%" textAnchor="middle" alignmentBaseline="middle" fill="white" font-size="24">SRM</text>
    <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle" fill="white" font-size="24">Unite</text>
    <text x="50%" y="75%" textAnchor="middle" alignmentBaseline="middle" fill="white" font-size="24">${text}</text>

</svg>
`;
  return (
      <View>
        <SvgXml xml={svgXml} width={'100%'} />
      </View>
  )
}
