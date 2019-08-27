using Microsoft.AspNetCore.Mvc;

[Route("[controller]")]
[ApiController]
public class HelloController : ControllerBase
{
    [HttpGet("{input}")]
    public ActionResult<string> Get(string input)
    {
        if (input.ToLowerInvariant() == "hello")
            return "World!";
        
        return "Stranger";
    }
}