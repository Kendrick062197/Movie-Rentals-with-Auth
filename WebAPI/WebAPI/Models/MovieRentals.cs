using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class MovieRentals
    {
        [Key]
        public int MovieID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(80)")]
        public string MovieTitle { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string MovieDescription { get; set; }
        [Required]
        [Column(TypeName = "varchar(1)")]
        public string IsRented { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string RentalDate { get; set; }
        [Required]
        [Column(TypeName = "varchar(1)")]
        public string IsDeleted { get; set; }
    }
}
