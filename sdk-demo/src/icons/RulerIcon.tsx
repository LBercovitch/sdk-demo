function RulerIcon({ iconHeight, iconWidth }: { iconHeight: string; iconWidth: string }) {
  return (
    <svg height={iconHeight} width={iconWidth} viewBox="0 0 512 512">
      <g>
        <path fill="currentColor" d="M373.324,0.003L0,373.321l138.676,138.676L512,138.68L373.324,0.003z M42.668,373.321l43.942-43.95
          l49.436,49.437l18.671-18.664l-49.437-49.437l37.38-37.379l28.482,28.475l18.664-18.664l-28.475-28.482l37.328-37.328
          l49.437,49.437l18.664-18.664l-49.437-49.437l37.394-37.394l28.475,28.482l18.664-18.664l-28.475-28.482l37.328-37.336
          l49.437,49.436l18.672-18.664l-49.437-49.437l43.942-43.942l96.008,96.015L138.676,469.337L42.668,373.321z"/>
      </g>
    </svg>
  );
}

export default RulerIcon;