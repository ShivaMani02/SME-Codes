export  default function generateOTP(length) {
            let otp = '';
            const characters = '0123456789';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                otp += characters[randomIndex];
            }
            return otp;
        }
