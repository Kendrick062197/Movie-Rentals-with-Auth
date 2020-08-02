using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieRentalsController : ControllerBase
    {
        private readonly AuthenticationContext _context;

        public MovieRentalsController(AuthenticationContext context)
        {
            _context = context;
        }

        // GET: api/MovieRentals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MovieRentals>>> GetMovieRentals()
        {
            return await _context.MovieRentals.ToListAsync();
        }

        // GET: api/MovieRentals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MovieRentals>> GetMovieRentals(int id)
        {
            var movieRentals = await _context.MovieRentals.FindAsync(id);

            if (movieRentals == null)
            {
                return NotFound();
            }

            return movieRentals;
        }

        // PUT: api/MovieRentals/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovieRentals(int id, MovieRentals movieRentals)
        {
            if (id != movieRentals.MovieID)
            {
                return BadRequest();
            }

            _context.Entry(movieRentals).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieRentalsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MovieRentals
        [HttpPost]
        public async Task<ActionResult<MovieRentals>> PostMovieRentals(MovieRentals movieRentals)
        {
            _context.MovieRentals.Add(movieRentals);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMovieRentals", new { id = movieRentals.MovieID }, movieRentals);
        }

        // DELETE: api/MovieRentals/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MovieRentals>> DeleteMovieRentals(int id)
        {
            var movieRentals = await _context.MovieRentals.FindAsync(id);
            if (movieRentals == null)
            {
                return NotFound();
            }

            _context.MovieRentals.Remove(movieRentals);
            await _context.SaveChangesAsync();

            return movieRentals;
        }

        private bool MovieRentalsExists(int id)
        {
            return _context.MovieRentals.Any(e => e.MovieID == id);
        }
    }
}
