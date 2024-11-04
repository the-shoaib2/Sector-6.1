import { sendLoginEmail, sendLogoutEmail } from './loginLogoutEmailHelpers.js';
import { sendWelcomeEmail, sendConfirmedAccountEmail } from './welcomeEmailHelpers.js';
import { sendVerificationEmail } from './verificationCodeEmailHelpers.js';
import { sendDeleteUserEmail } from './deleteUserEmailHelpers.js';
import { sendRecoverAccountEmail } from './recoverAccountEmailHelpers.js';


export const handleEmailEvent = async (type, email, code = null) => {
    try {
        switch (type) {
            case 'login':
                await sendLoginEmail(email);
                break;
            case 'logout':
                await sendLogoutEmail(email);
                break;
            case 'verification':
                if (!code) throw new Error('Verification code is required');
                await sendVerificationEmail(email, code);
                break;
            case 'welcome':
                await sendWelcomeEmail(email);
                break;
            case 'confirmation':
                await sendConfirmedAccountEmail(email);
                break;
            case 'deleteUser':
                await sendDeleteUserEmail(email);
                break;
            case 'recoverAccount':
                await sendRecoverAccountEmail(email);
                break;
            default:
                throw new Error('Invalid email event type');
        }
    } catch (error) {
        throw new Error(`Failed to send ${type} email`);
    }
};

export default { handleEmailEvent };
