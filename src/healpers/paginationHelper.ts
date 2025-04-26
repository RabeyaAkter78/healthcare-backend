type TOptions = {
  page?: number;
  limit?: number;
  SortOrder?: string;
  sortBy?: string;
};

type IOptionResults={
    page:number,
    limit:number,
    skip:number,
    sortBy:string,
    sortOrder:string
}

const calculatePagination = (options: TOptions):IOptionResults => {
  const page: number = Number(options.page || 1);
  const limit: number = Number(options.limit || 10);
  const skip: number = (page - 1) * limit;
  const sortBy: string = options.sortBy || "createdAt";
  const sortOrder: string = options.SortOrder || "desc";
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};
export const paginationHelper = {
  calculatePagination,
};
