export default function getDateString(date: string, format: string) {

    const dateObj = new Date(date);

    switch (format) {

        case 'D Mon Yr': {

            const monthNames = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];

            const day = dateObj.getDate();
            const month = monthNames[dateObj.getMonth()];
            const year = dateObj.getFullYear();

            return `${day} ${month} ${year}`;
        }

        case 'D Month Yr': {
            
            const monthNames = [
                "January", "February", "March", "April", 
                "May", "June", "July", "August", "September", 
                "October", "November", "December"
            ];
    
            const day = dateObj.getDate();
            const month = monthNames[dateObj.getMonth()];
            const year = dateObj.getFullYear();
    
            return `${day} ${month} ${year}`;
        }
        
        case 'YYYY-MM-DD': {

            const day = ('0' + dateObj.getDate()).slice(-2);
            const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
            const year = dateObj.getFullYear();
            return `${year}-${month}-${day}`;
        }

        default: {
            
            const day = dateObj.getDate();
            const month = dateObj.getMonth();
            const year = dateObj.getFullYear();

            return `${day}-${month}-${year}`;
        }
    }
}