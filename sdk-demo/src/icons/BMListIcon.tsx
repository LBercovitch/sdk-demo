function BMListIcon({ iconHeight, iconWidth }: { iconHeight: string; iconWidth: string }) {
  return (
    <svg fill="none" width={iconWidth} height={iconHeight} viewBox="0 0 24 24" >
      <path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
        d="M15 3V19M15 3L9 5M15 3L21 5V21L15 19M15 19L9 21M9 5V21M9 5L3 3V19L9 21"
      />
    </svg>
  );
}

export default BMListIcon;
