export interface AuthenticationModel {
    id_user: number;
    user_name: string;
    no_identitas?: string;
    full_name: string;
    id_role: number;
    nama_role: string;
    is_verified?: boolean;
}