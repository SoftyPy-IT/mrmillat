"use client";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import React, { useEffect, useState } from "react";
import EventCardItem from "./EventItemCart";
import { TEvent } from "@/types/types";
import { Pagination, Stack } from "@mui/material";

const EventHighLights = () => {
  const axiosPublic = useAxiosPublic();
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalCount, setTotalCount] = useState(0);
  const limit = 9; 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosPublic.get(
          // `events?type=previous&limit=${limit}&page=${currentPage}&sort=-createdAt`

          `events?limit=${limit}&page=${currentPage}&sort=-date`
        );
        const { totalCount, data } = response?.data?.data;
        setEvents(data);
        setTotalCount(totalCount);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [currentPage, axiosPublic]);

  return (
    <div>
      {/* Changed to 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length === 0 ? (
          <p className="col-span-full text-center py-10">No events found</p>
        ) : (
          events.map((event: TEvent) => (
            <EventCardItem key={event?._id} event={event} />
          ))
        )}
      </div>
      
      {/* pagination buttons */}
      {totalCount > limit && (
        <div className="flex item-center justify-center my-10">
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(totalCount / limit)}
              page={currentPage}
              onChange={(event, value) => setCurrentPage(value)}
              color="primary"
            />
          </Stack>
        </div>
      )}
    </div>
  );
};

export default EventHighLights;