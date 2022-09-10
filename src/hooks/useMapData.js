import { useState, useEffect } from "react";
import { json } from "d3";

const useMapData = (url) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		setLoading(true);
		json(url)
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
	}, [url]);
	
	return { data, error, loading };
};

export default useMapData;