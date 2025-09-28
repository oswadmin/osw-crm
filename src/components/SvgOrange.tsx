export default function SvgOrange({ }) {
    return (
        <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Transparent Orange Slice with Lines Only */}

            {/* Optional: Background for better visibility on white (remove in final if not needed) */}
            {/* <rect width="100%" height="100%" fill="#f0f0f0" /> */}

            {/* Outer Circle (optional, for visual boundary - can be removed if just lines are needed) */}
            {/* // Transparent circle, remove stroke */}
            <circle cx="50" cy="50" r="48" fill="#FFA500" stroke-width="8" /> 

            {/* Segment Lines (8 sections) */}
            {/* // 0 degrees */}
            <line x1="50" y1="50" x2="98" y2="50" stroke="#FFA500" stroke-width="8" stroke-linecap="round"/> 
            {/* // 45 degrees */}
            <line x1="50" y1="50" x2="84.85" y2="84.85" stroke="#FFA500" stroke-width="8" stroke-linecap="round"/> 
            {/* // 90 degrees */}
            <line x1="50" y1="50" x2="50" y2="98" stroke="#FFA500" stroke-width="8" stroke-linecap="round"/> 
            {/* // 135 degrees */}
            <line x1="50" y1="50" x2="15.15" y2="84.85" stroke="#FFA500" stroke-width="8" stroke-linecap="round"/> 
            {/* // 180 degrees */}
            <line x1="50" y1="50" x2="2" y2="50" stroke="#FFA500" stroke-width="8" stroke-linecap="round"/>  
            {/* // 225 degrees */}
            <line x1="50" y1="50" x2="15.15" y2="15.15" stroke="#FFA500" stroke-width="8" stroke-linecap="round"/> 
            {/* // 270 degrees */}
            <line x1="50" y1="50" x2="50" y2="2" stroke="#FFA500" stroke-width="8" stroke-linecap="round"/>   
            {/* // 315 degrees */}
            <line x1="50" y1="50" x2="84.85" y2="15.15" stroke="#FFA500" stroke-width="8" stroke-linecap="round"/> 

        </svg>
    )
  }