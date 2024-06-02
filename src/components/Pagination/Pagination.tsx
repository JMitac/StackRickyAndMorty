import { FC } from "react";
import { setPage, useHomeStore } from "../../stores/Home";

export const Pagination:FC= () => {
    const { page, totalPage } = useHomeStore((state) => state)
    return (
        <div style={{
            display: "flex",
            gap: "0.5em",
            justifyContent: "center",
            marginTop: "1em",
            alignItems: "center"
        }}>
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >
                Previous
            </button>
            <span>{page}</span>
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPage}
            >
                Next
            </button>
        </div>
      );
}