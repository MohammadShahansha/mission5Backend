/* eslint-disable no-undef */
import { Query } from 'mongoose';
export type TQueryObj = {
  [key: string]: unknown;
  page?: string;
  limit?: string;
  searchTerm?: string;
  fields?: string;
  sortBy?: string;
  sortOrder?: string;
};

const filter = <T>(modelQuery: Query<T[], T>, query: TQueryObj) => {
  const queryObj = { ...query };
  const excludedFields = [
    'page',
    'searchTerm',
    'limit',
    'sort',
    'sortBy',
    'sortOrder',
    'fields',
  ];

  excludedFields.forEach((keyword) => delete queryObj[keyword]);
  modelQuery = modelQuery.find(queryObj);
  return modelQuery;
};
export default filter;
