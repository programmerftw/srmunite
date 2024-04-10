import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';


export default function Ellipse({ text }) {
    const svgXml = `
  <svg width="389" height="193" viewBox="0 13 389 193" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M389 96.5C389 109.173 383.969 121.721 374.195 133.429C364.42 145.137 350.093 155.775 332.032 164.736C313.971 173.697 292.53 180.805 268.932 185.654C245.334 190.504 220.042 193 194.5 193C168.958 193 143.666 190.504 120.068 185.654C96.4702 180.805 75.0287 173.697 56.9677 164.736C38.9067 155.775 24.58 145.137 14.8054 133.429C5.03089 121.721 -2.23296e-06 109.173 0 96.5L0 0L185 0H389V96.5Z" fill="url(#paint0_linear_258_11)" />
  <defs>
      <linearGradient id="paint0_linear_258_11" x1="3.56876e-07" y1="39.1514" x2="114.718" y2="239.42" gradientUnits="userSpaceOnUse">
          <stop stop-color="#007DFF" />
          <stop offset="1" stop-color="#004B99" />
      </linearGradient>
  </defs>
  <text x="50%" y="55%" textAnchor="middle" alignmentBaseline="middle" fill="white" font-size="24">${text}</text>
</svg>
`;
    return (
        <View>
            <SvgXml xml={svgXml} width={'100%'} />
        </View>
    )
}