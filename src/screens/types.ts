import { StackNavigationProp } from '@react-navigation/stack';
import { SectionArtistItem } from '@/store/music/selectors';

export type StackParams = {
    [key: string]: Record<string, unknown> | object | undefined;
    Albums: undefined;
    Album: { id: string };
    Artists: undefined;
    Artist: SectionArtistItem;
    Playlists: undefined;
    Playlist: { id: string };
    RecentAlbums: undefined;
    Search: undefined;
    SetJellyfinServer: undefined;
    TrackPopupMenu: { trackId: string };
    Lyrics: undefined;
};

export type NavigationProp = StackNavigationProp<StackParams>;
