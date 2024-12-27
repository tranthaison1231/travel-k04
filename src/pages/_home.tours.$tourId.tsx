import { useParams, useSearchParams } from "react-router";
import { Button } from "~/shared/ui/atoms/Button";

export default function Tour() {
  const { tourId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <div>Tour: {tourId}</div>
      <div>Search: {searchParams.get("keyword")}</div>
      <div>Q: {searchParams.get("q")}</div>

      <Button
        onClick={() => {
          setSearchParams({ keyword: "new-keyword", q: "new-q" });
        }}
      >
        Change key word
      </Button>
    </div>
  );
}
