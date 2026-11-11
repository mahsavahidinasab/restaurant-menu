import TextField from "@mui/material/TextField";

export default function SearchBar({searchquery, setSearchQuery}) {
    return(
        <div className="search-bar">
            <TextField 
            fullWidth
                type="text"
                placeholder="Search the menu..."
                value={searchquery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}