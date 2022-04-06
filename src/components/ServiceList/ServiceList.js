import React from "react";
import ServiceItem from "./ServiceItem/ServiceItem";

function ServiceList({ services }) {
  return services?.map((service) => (
    <ServiceItem key={service.id} service={service} />
  ));
}

export default ServiceList;
