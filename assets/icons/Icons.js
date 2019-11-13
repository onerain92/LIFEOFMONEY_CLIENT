import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

export const FacebookIcon = props => (
  <Svg width={24} height={24} fill="#ffffff" {...props}>
    <Path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
  </Svg>
);

export const CheckMoneyIcon = props => (
  <Svg width={24} height={24} {...props}>
    <Path d="M17 12a6 6 0 000 12 6 6 0 000-12zm.5 8.474V21H17v-.499a3.459 3.459 0 01-1.5-.363l.228-.822c.478.186 1.114.383 1.612.27.574-.13.692-.721.057-1.005-.465-.217-1.889-.402-1.889-1.622 0-.681.52-1.292 1.492-1.425V15h.5v.509c.362.01.768.073 1.221.21l-.181.824c-.384-.135-.808-.257-1.222-.232-.744.043-.81.688-.29.958.856.402 1.972.7 1.972 1.773.001.858-.672 1.315-1.5 1.432zm1.624-10.179c1.132-.223 2.162-.626 2.876-1.197v.652c0 .499-.386.955-1.007 1.328a7.946 7.946 0 00-1.869-.783zM17 4.5c2.673 0 5-1.007 5-2.25S19.673 0 17 0c-2.672 0-5 1.007-5 2.25s2.328 2.25 5 2.25zm.093-2.009c-.299-.09-1.214-.166-1.214-.675 0-.284.334-.537.958-.593V1h.321v.211c.234.005.494.03.784.09l-.116.342a3.207 3.207 0 00-.708-.099l-.072.001c-.482.02-.521.287-.188.399.547.169 1.267.292 1.267.74 0 .357-.434.548-.967.596v.22h-.321v-.208a3.23 3.23 0 01-.962-.152l.147-.343c.244.063.552.126.828.126l.208-.014c.369-.053.443-.3.035-.418zM6 15.5c1.445 0 2.775-.301 3.705-.768a8.029 8.029 0 011.198-1.899C10.452 11.79 8.364 11 6 11c-2.672 0-5 1.007-5 2.25s2.328 2.25 5 2.25zm.093-2.009c-.299-.09-1.214-.166-1.214-.675 0-.284.335-.537.958-.593V12h.321v.211c.234.005.494.03.784.09l-.117.342a3.19 3.19 0 00-.707-.099l-.072.001c-.482.02-.52.287-.188.399.547.169 1.267.292 1.267.74 0 .357-.434.548-.967.596v.22h-.321v-.208a3.225 3.225 0 01-.962-.152l.147-.343c.244.063.552.126.828.126l.208-.014c.368-.053.443-.3.035-.418zm4.003 8.531C9.177 22.612 7.656 23 6 23c-2.672 0-5-1.007-5-2.25v-.652c1.146.918 3.109 1.402 5 1.402 1.236 0 2.499-.211 3.549-.611.153.394.336.773.547 1.133zM1 18.25v-.651C2.146 18.516 4.109 19 6 19a10.59 10.59 0 003.028-.435c.033.469.107.926.218 1.37-.888.347-2.024.565-3.246.565-2.672 0-5-1.007-5-2.25zm0-2.5v-.652c1.146.918 3.109 1.402 5 1.402 1.127 0 2.275-.176 3.266-.509a7.923 7.923 0 00-.241 1.526C8.171 17.815 7.122 18 6 18c-2.672 0-5-1.007-5-2.25zm11-11v-.652c1.146.918 3.109 1.402 5 1.402 1.892 0 3.854-.484 5-1.402v.652C22 5.993 19.673 7 17 7c-2.672 0-5-1.007-5-2.25zm0 5v-.652c.713.571 1.744.974 2.876 1.197a7.939 7.939 0 00-1.868.783C12.386 10.705 12 10.249 12 9.75zm0-2.5v-.651C13.146 7.516 15.109 8 17 8c1.892 0 3.854-.484 5-1.401v.651c0 1.243-2.327 2.25-5 2.25-2.672 0-5-1.007-5-2.25z" />
  </Svg>
);

export const ResultIcon = props => (
  <Svg width={24} height={24} {...props}>
    <Path d="M4 22V2h16v11.543C20 17.65 14 16 14 16s1.518 6-2.638 6H4zm18-7.614V0H2v24h10.189C15.352 24 22 16.777 22 14.386zM17 13H7v-1h10v1zm0-4H7v1h10V9zm0-3H7v1h10V6z" />
  </Svg>
);

export const SearchIcon = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="prefix__feather prefix__feather-search"
    {...props}>
    <Circle cx={11} cy={11} r={8} />
    <Path d="M21 21l-4.35-4.35" />
  </Svg>
);

export const MypageIcon = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="prefix__feather prefix__feather-user"
    {...props}>
    <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <Circle cx={12} cy={7} r={4} />
  </Svg>
);

export const AddIcon = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="prefix__feather prefix__feather-plus-circle"
    {...props}>
    <Circle cx={12} cy={12} r={10} />
    <Path d="M12 8v8M8 12h8" />
  </Svg>
);

export const EditIcon = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="prefix__feather prefix__feather-edit"
    {...props}>
    <Path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <Path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </Svg>
);

export const PlusIcon = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke="#00A67A"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="prefix__feather prefix__feather-plus"
    {...props}>
    <Path d="M12 5v14M5 12h14" />
  </Svg>
);

export const MinusIcon = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke="#fa5252"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="prefix__feather prefix__feather-minus"
    {...props}>
    <Path d="M5 12h14" />
  </Svg>
);
