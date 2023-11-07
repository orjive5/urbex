import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { useBoundStore } from "@/store";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

const AutocompletePlaces = () => {
    const store = useBoundStore();
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions
    } = usePlacesAutocomplete();

    const handleSelect = async (val: string) => {
        setValue(val, false);
        clearSuggestions();

        const results = await getGeocode({ address: val });
        const { lat, lng } = await getLatLng(results[0]);
        store.setFindLocation({ lat, lng })
    }

    return (
        <Command className="w-[300px]">
            <CommandInput
                value={value}
                onValueChange={setValue}
                disabled={!ready}
                placeholder="Find location"
                className="h-full"
            />
            {status === 'OK'
                && (
                    <CommandList className="absolute bg-background w-[300px] top-10">
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {data.map(({ place_id, description }) => (
                                <CommandItem
                                    key={place_id}
                                    value={description}
                                    onSelect={handleSelect}
                                >
                                    {description}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                )
            }
        </Command>
    )
}

export default AutocompletePlaces;