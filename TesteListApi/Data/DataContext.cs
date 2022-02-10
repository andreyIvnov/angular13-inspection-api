using Microsoft.EntityFrameworkCore;

namespace TesteListApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> opts) : base(opts) { }

        public DbSet<Inspection> Inspections { get; set; }
        public DbSet<InspectionType> InspectionTypes { get; set; }  
        public DbSet<Status> Statuss { get; set; }  

    }
}
